// capture.swift — Apple's Object Capture (RealityKit PhotogrammetrySession) on a folder of photos.
//
//   swiftc -O tools/capture.swift -o source/scans/capture
//   source/scans/capture <photos-dir> <out-dir/ or out.usdz> [preview|reduced|medium|full|raw] [high|normal] [mask|nomask]
//
// A folder as the output gets an OBJ with its material and textures; a .usdz name, one USDZ. The photos are taken as
// unordered (Commons photos come from many visitors, not one walk round). Prints how many photos it could place.
import Foundation
import RealityKit

let a = CommandLine.arguments
guard a.count >= 3 else { print("usage: capture <photos> <out> [detail] [sensitivity]"); exit(1) }
guard PhotogrammetrySession.isSupported else { print("Object Capture isn't supported on this Mac"); exit(1) }
let input = URL(fileURLWithPath: a[1], isDirectory: true)
let output = URL(fileURLWithPath: a[2], isDirectory: a[2].hasSuffix("/"))
let details: [String: PhotogrammetrySession.Request.Detail] = ["preview": .preview, "reduced": .reduced, "medium": .medium, "full": .full, "raw": .raw]
let detail = details[a.count > 3 ? a[3] : "medium"] ?? .medium

var config = PhotogrammetrySession.Configuration()
config.sampleOrdering = .unordered
config.featureSensitivity = (a.count > 4 && a[4] == "normal") ? .normal : .high
config.isObjectMaskingEnabled = !(a.count > 5 && a[5] == "nomask")

let session: PhotogrammetrySession
do { session = try PhotogrammetrySession(input: input, configuration: config) }
catch { print("could not start: \(error)"); exit(1) }

Task {
  var last = -1
  do {
    for try await out in session.outputs {
      switch out {
      case .requestProgress(_, let f):
        let p = Int(f * 20); if p != last { last = p; print("progress \(p * 5)%"); fflush(stdout) }
      case .requestComplete(let req, let result):
        if case .poses(let poses) = result { print("placed \(poses.posesBySample.count) photos") }
        else { print("done \(req)") }
        fflush(stdout)
      case .requestError(let req, let e): print("error in \(req): \(e)"); fflush(stdout)
      case .invalidSample(let id, let reason): print("invalid photo \(id): \(reason)")
      case .skippedSample(let id): print("skipped photo \(id)")
      case .automaticDownsampling: print("downsampling (memory)")
      case .inputComplete: print("read the photos"); fflush(stdout)
      case .processingCancelled: print("cancelled"); exit(3)
      case .processingComplete: print("complete"); fflush(stdout); exit(0)
      default: break
      }
    }
  } catch { print("stream failed: \(error)"); exit(2) }
}
// (the camera positions too, only if asked: POSES=1 — asking for them has made whole runs fail)
let wantPoses = ProcessInfo.processInfo.environment["POSES"] == "1"
let model = PhotogrammetrySession.Request.modelFile(url: output, detail: detail)
do { try session.process(requests: wantPoses ? [.poses, model] : [model]) }
catch { print("could not process: \(error)"); exit(1) }
RunLoop.main.run()

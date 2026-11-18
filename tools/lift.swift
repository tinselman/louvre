// lift.swift — cut the subject out of each photo (macOS's own "lift subject from background", Vision's
// foreground-instance mask) and set it on plain black, keeping the photo's camera data. For photogrammetry from
// visitors' photos: the walls, windows and crowds of many years and two rooms then can't be mistaken for the object.
//
//   swiftc -O tools/lift.swift -o source/scans/lift
//   source/scans/lift <photos-dir> <out-dir>
//
// Of several subjects in a photo (a statue, people in front), the tallest is kept. A photo with no subject found is
// left out (listed).
import Foundation
import Vision
import CoreImage
import ImageIO
import UniformTypeIdentifiers

let a = CommandLine.arguments
guard a.count == 3 else { print("usage: lift <photos> <out>"); exit(1) }
let inDir = URL(fileURLWithPath: a[1], isDirectory: true), outDir = URL(fileURLWithPath: a[2], isDirectory: true)
try? FileManager.default.createDirectory(at: outDir, withIntermediateDirectories: true)
let ctx = CIContext()
let files = (try FileManager.default.contentsOfDirectory(at: inDir, includingPropertiesForKeys: nil))
  .filter { ["jpg", "jpeg"].contains($0.pathExtension.lowercased()) }.sorted { $0.path < $1.path }
var kept = 0, none: [String] = []
for url in files {
  autoreleasepool {
    let handler = VNImageRequestHandler(url: url)
    let req = VNGenerateForegroundInstanceMaskRequest()
    guard (try? handler.perform([req])) != nil, let obs = req.results?.first, !obs.allInstances.isEmpty else {
      none.append(url.lastPathComponent); return
    }
    // the tallest subject: each instance's mask, its rows with any of it
    var best = obs.allInstances.first!, bestH = -1
    for i in obs.allInstances {
      guard let m = try? obs.generateScaledMaskForImage(forInstances: IndexSet(integer: i), from: handler) else { continue }
      CVPixelBufferLockBaseAddress(m, .readOnly)
      let h = CVPixelBufferGetHeight(m), w = CVPixelBufferGetWidth(m), row = CVPixelBufferGetBytesPerRow(m)
      let p = CVPixelBufferGetBaseAddress(m)!.assumingMemoryBound(to: Float32.self)
      var top = h, bottom = -1
      for y in stride(from: 0, to: h, by: 4) {
        var any = false
        for x in stride(from: 0, to: w, by: 8) where p[y * row / 4 + x] > 0.5 { any = true; break }
        if any { top = min(top, y); bottom = max(bottom, y) }
      }
      CVPixelBufferUnlockBaseAddress(m, .readOnly)
      if bottom - top > bestH { bestH = bottom - top; best = i }
    }
    guard let cut = try? obs.generateMaskedImage(ofInstances: IndexSet(integer: best), from: handler, croppedToInstancesExtent: false) else {
      none.append(url.lastPathComponent); return
    }
    let fg = CIImage(cvPixelBuffer: cut)
    let img = fg.composited(over: CIImage(color: .black).cropped(to: fg.extent))
    guard let cg = ctx.createCGImage(img, from: img.extent) else { none.append(url.lastPathComponent); return }
    // the photo's own properties (camera, focal length), upright now
    var props: [String: Any] = [:]
    if let src = CGImageSourceCreateWithURL(url as CFURL, nil), let p = CGImageSourceCopyPropertiesAtIndex(src, 0, nil) as? [String: Any] { props = p }
    props[kCGImagePropertyOrientation as String] = 1
    props[kCGImageDestinationLossyCompressionQuality as String] = 0.92
    let out = outDir.appendingPathComponent(url.lastPathComponent)
    guard let dst = CGImageDestinationCreateWithURL(out as CFURL, UTType.jpeg.identifier as CFString, 1, nil) else { return }
    CGImageDestinationAddImage(dst, cg, props as CFDictionary)
    if CGImageDestinationFinalize(dst) { kept += 1 }
  }
}
print("lifted \(kept) of \(files.count)")
if !none.isEmpty { print("no subject found: \(none.joined(separator: " "))") }

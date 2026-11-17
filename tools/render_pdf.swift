// render one page of a PDF to PNG: render_pdf <pdf> <page index> <scale> <out.png> [x y w h in PDF points, origin bottom-left]
import Foundation
import PDFKit
import AppKit
let a = CommandLine.arguments
let doc = PDFDocument(url: URL(fileURLWithPath: a[1]))!
let page = doc.page(at: Int(a[2])!)!
let s = CGFloat(Double(a[3])!)
let box = page.bounds(for: .mediaBox)
var r = box
if a.count >= 9 { r = CGRect(x: Double(a[5])!, y: Double(a[6])!, width: Double(a[7])!, height: Double(a[8])!) }
let W = Int(r.width * s), H = Int(r.height * s)
let cs = CGColorSpaceCreateDeviceRGB()
let ctx = CGContext(data: nil, width: W, height: H, bitsPerComponent: 8, bytesPerRow: 0, space: cs, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
ctx.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1)); ctx.fill(CGRect(x: 0, y: 0, width: W, height: H))
ctx.scaleBy(x: s, y: s); ctx.translateBy(x: -r.origin.x, y: -r.origin.y)
page.draw(with: .mediaBox, to: ctx)
let img = ctx.makeImage()!
let rep = NSBitmapImageRep(cgImage: img)
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: a[4]))
print("\(W)x\(H)")

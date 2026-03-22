import fitz
import os

os.makedirs("src/assets/certs", exist_ok=True)
doc = fitz.open("public/resume.pdf")
count = 0

for i in range(len(doc)):
    for img in doc.get_page_images(i):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        if pix.n - pix.alpha > 3:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        pix.save(f"src/assets/certs/cert_{count}.png")
        pix = None
        print(f"Extracted cert_{count}.png")
        count += 1

if count == 0:
    print("No images found in the PDF via PyMuPDF.")

import fitz
import os

pdf_files = {
    "oracle-ai": r"C:\Users\salap\Downloads\AI oracle certificate.pdf",
    "oracle-data": r"C:\Users\salap\Downloads\oracle ecert.pdf",
    "ielts": r"C:\Users\salap\Downloads\ielts.pdf",
    "nptel": r"C:\Users\salap\Downloads\Privacy and Security in Online Social Media.pdf"
}

os.makedirs("src/assets/certs", exist_ok=True)

for name, path in pdf_files.items():
    try:
        doc = fitz.open(path)
        page = doc[0] 
        pix = page.get_pixmap(dpi=150) # 150 DPI for good resolution
        out_path = f"src/assets/certs/{name}.png"
        pix.save(out_path)
        print(f"Saved {out_path}")
    except Exception as e:
        print(f"Failed to process {path}: {e}")

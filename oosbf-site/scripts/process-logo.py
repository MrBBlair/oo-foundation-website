#!/usr/bin/env python3
"""Remove white background and trim excess whitespace from logo."""
from PIL import Image
import sys

def process_logo(input_path: str, output_path: str, threshold: int = 250) -> None:
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    # Make white/near-white pixels transparent
    new_data = []
    for item in data:
        r, g, b, a = item
        if r >= threshold and g >= threshold and b >= threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)

    # Get bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.save(output_path, "PNG")
    print(f"Saved: {output_path}")

if __name__ == "__main__":
    input_path = sys.argv[1] if len(sys.argv) > 1 else "input.png"
    output_path = sys.argv[2] if len(sys.argv) > 2 else "output.png"
    process_logo(input_path, output_path)

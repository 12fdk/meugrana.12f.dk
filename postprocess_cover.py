from PIL import Image
img = Image.open('/home/hermeswebui/.hermes/home/meugrana-blog/scripts/covers/cartao-adicional-controlar-gastos.png')
print(f'Size: {img.size}, Mode: {img.mode}')
# Post-process to 1200x700 JPEG
from PIL import ImageOps
# Resize maintaining aspect ratio, then center-crop to 1200x700
width, height = img.size
ratio = max(1200/width, 700/height)
new_size = (int(width * ratio), int(height * ratio))
img_resized = img.resize(new_size, Image.LANCZOS)
# Center crop
left = (img_resized.width - 1200) // 2
top = (img_resized.height - 700) // 2
img_cropped = img_resized.crop((left, top, left + 1200, top + 700))
img_cropped.save('/home/hermeswebui/.hermes/home/meugrana-blog/public/images/blog/cartao-adicional-controlar-gastos.jpg', quality=82)
print(f'Saved: public/images/blog/cartao-adicional-controlar-gastos.jpg')
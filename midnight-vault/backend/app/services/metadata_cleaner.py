import exiftool
import tempfile

async def clean_metadata(file):
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        tmp.write(await file.read())
        tmp.flush()
        with exiftool.ExifTool() as et:
            et.execute(b'-all=', tmp.name.encode())
        with open(tmp.name, 'rb') as f:
            cleaned_bytes = f.read()
    return cleaned_bytes

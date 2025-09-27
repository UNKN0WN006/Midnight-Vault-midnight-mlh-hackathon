import exiftool
import tempfile

async def extract_metadata(file):
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        tmp.write(await file.read())
        tmp.flush()
        with exiftool.ExifTool() as et:
            metadata = et.get_metadata(tmp.name)
    return metadata

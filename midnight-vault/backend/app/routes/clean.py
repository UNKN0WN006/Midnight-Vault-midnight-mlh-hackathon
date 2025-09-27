from fastapi import APIRouter, UploadFile, File, Response
from app.services.metadata_cleaner import clean_metadata

router = APIRouter()

@router.post("/clean")
async def clean(file: UploadFile = File(...)):
    cleaned_bytes = await clean_metadata(file)
    return Response(content=cleaned_bytes, media_type=file.content_type)

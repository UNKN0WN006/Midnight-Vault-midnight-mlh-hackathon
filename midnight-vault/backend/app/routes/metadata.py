from fastapi import APIRouter, UploadFile, File
from app.services.metadata_extractor import extract_metadata

router = APIRouter()

@router.post("/upload")
async def upload(file: UploadFile = File(...)):
    metadata = await extract_metadata(file)
    return {"metadata": metadata}

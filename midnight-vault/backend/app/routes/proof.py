from fastapi import APIRouter, UploadFile, File
from app.services.proof_generator import generate_proof

router = APIRouter()

@router.post("/proof")
async def proof(file: UploadFile = File(...)):
    tx_id = await generate_proof(file)
    return {"txId": tx_id}

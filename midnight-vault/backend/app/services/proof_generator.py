import hashlib

def hash_file(file_bytes):
    return hashlib.sha256(file_bytes).hexdigest()

async def generate_proof(file):
    file_bytes = await file.read()
    file_hash = hash_file(file_bytes)
    # TODO: Integrate with Midnight SDK to store hash and get tx_id
    tx_id = f"mocked-txid-{file_hash[:8]}"
    return tx_id

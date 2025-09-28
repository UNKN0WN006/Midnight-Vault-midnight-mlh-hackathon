# Midnight Vault – Application README

This is the main application for **Midnight Vault**, built for the Midnight MLH Hackathon.

## Features
- Upload files and view hidden metadata (EXIF, author, GPS, timestamps)
- One-click metadata scrubbing and AES-256 encryption
- Store privacy proof (file hash) on the Midnight blockchain
- Download/share cleaned files via anonymous link or QR code
- Verifiable privacy badge (blockchain tx)

## Tech Stack
- **Frontend:** React (file upload, metadata display, clean button, QR code)
- **Backend:** FastAPI (Python) for metadata extraction, cleaning, encryption, and blockchain integration
- **Blockchain:** Midnight (smart contract for file hash proofs)

## Setup Instructions

### 1. Frontend
```
cd frontend
npm install
npm start
```
The app will run at http://localhost:3000

### 2. Backend
```
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```
The API will run at http://localhost:8000

### 3. Blockchain
- See the `blockchain/` folder for smart contract and scripts.
- Deploy your contract using the Midnight Compact CLI and connect your backend to the contract address.

## Usage
1. Open the frontend in your browser.
2. Upload a file (image, PDF, etc.).
3. View and review hidden metadata.
4. Click "Clean File" to scrub metadata and encrypt the file.
5. Download/share the cleaned file and view the blockchain proof (txId).
6. Share the privacy-safe file via link or QR code.

## Demo Video
- 

## Known Issues / Notes
- If the blockchain integration is mocked, mention it here and describe how it will be integrated with the real Midnight SDK/CLI.
- For hackathon demo, local storage and hash proof are sufficient.

## License
MIT

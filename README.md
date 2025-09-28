# Midnight Vault – Midnight MLH Hackathon Submission

## About the Hackathon
This project was built for the **Midnight Hackathon** hosted by Major League Hacking (MLH), September 26–28, 2025. The hackathon challenges participants to build privacy-preserving applications on the Midnight blockchain, leveraging zero-knowledge proofs and decentralized technology to protect user data by design.

**Key Requirements:**
- Use the Midnight blockchain platform (privacy-first, ZK-proofs)
- Public code repository and 2-minute demo video
- Focus on privacy, security, and real-world impact
- Demo must show a working MVP and a clear expansion path

## Project Idea: Midnight Vault
**Midnight Vault** is a privacy-first digital locker for anonymous, metadata-proof file sharing and storage. It empowers users to:
- Upload sensitive files (images, PDFs, docs, etc.)
- Instantly see and scrub hidden metadata leaks (EXIF, author, GPS, timestamps)
- Encrypt files client-side for secure storage
- Generate a blockchain proof (hash + ZK proof) on Midnight
- Share files via anonymous, permissioned links or QR codes
- Prove privacy with a "Privacy-Safe Badge" (blockchain tx)

**Problem Statement:**
Millions of people unknowingly share files that leak hidden metadata (location, device, author info). Existing cloud lockers (Google Drive, DigiLocker) are centralized and don’t guarantee privacy or metadata scrubbing. There’s no solution that scrubs leaks, encrypts data, and proves privacy on-chain.

**Solution:**
Midnight Vault provides a simple, secure workflow:
1. Upload a file and see all hidden metadata
2. One-click metadata scrubbing and AES encryption
3. Store a privacy proof (file hash) on the Midnight blockchain
4. Share the cleaned file via anonymous link/QR
5. Judges and users can verify privacy status on-chain

**Tech Stack:**
- Frontend: React (file upload, metadata display, clean button, QR code)
- Backend: FastAPI (Python) for metadata extraction, cleaning, encryption, and blockchain integration
- Blockchain: Midnight (smart contract for file hash proofs)

**Demo Flow:**
1. Upload file → see metadata leaks
2. Clean file → metadata removed
3. Blockchain proof generated
4. Download/share cleaned file with privacy badge

**Why Midnight Vault?**
- Anonymous, privacy-by-default file sharing
- Verifiable privacy using blockchain
- Real-world use for journalists, lawyers, businesses, and individuals

See the application README in `midnight-vault/frontend/README.md` for setup, usage, and technical details.
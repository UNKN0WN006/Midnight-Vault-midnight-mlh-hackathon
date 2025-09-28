import React, { useState } from 'react';
import axios from 'axios';
import MetadataTable from './MetadataTable';
import QRCode from 'react-qr-code';

function Upload() {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [cleaned, setCleaned] = useState(false);
  const [downloadLink, setDownloadLink] = useState('');
  const [proof, setProof] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMetadata(null);
    setCleaned(false);
    setDownloadLink('');
    setProof('');
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post('/api/upload', formData);
    setMetadata(res.data.metadata);
  };

  const handleClean = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post('/api/clean', formData, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    setDownloadLink(url);
    setCleaned(true);
    // Get proof
    const hashRes = await axios.post('/api/proof', formData);
    setProof(hashRes.data.txId);
  };

  return (
    <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-lg">
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleUpload} className="bg-blue-600 px-4 py-2 rounded mr-2">Show Metadata</button>
      {metadata && <MetadataTable metadata={metadata} />}
      {metadata && !cleaned && (
        <button onClick={handleClean} className="bg-green-600 px-4 py-2 rounded mt-4">Clean File</button>
      )}
      {cleaned && (
        <div className="mt-4">
          <a href={downloadLink} download className="text-blue-400 underline">Download Cleaned File</a>
          <div className="mt-2">Blockchain Proof Tx: <span className="font-mono">{proof}</span></div>
          <div className="mt-2"><QRCode value={downloadLink} /></div>
        </div>
      )}
    </div>
  );
}

export default Upload;

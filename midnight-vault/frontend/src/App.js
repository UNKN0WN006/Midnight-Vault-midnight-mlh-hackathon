import React from 'react';
import Upload from './components/Upload';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Midnight Vault</h1>
      <Upload />
    </div>
  );
}

export default App;

import React from 'react';

function MetadataTable({ metadata }) {
  if (!metadata) return null;
  return (
    <table className="table-auto w-full mt-4 bg-gray-700 rounded">
      <thead>
        <tr>
          <th className="px-4 py-2">Key</th>
          <th className="px-4 py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(metadata).map(([key, value]) => (
          <tr key={key}>
            <td className="border px-4 py-2">{key}</td>
            <td className="border px-4 py-2">{String(value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MetadataTable;

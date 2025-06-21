import React from 'react';

// Displays file metadata and action buttons
function FileInfo({ fileInfo, onPreview, onReset }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      <p><strong>File Name:</strong> {fileInfo.name}</p>
      <p><strong>Extension:</strong> {fileInfo.extension}</p>
      <p><strong>MIME Type:</strong> {fileInfo.type}</p>
      <p><strong>Size:</strong> {(fileInfo.size / 1024).toFixed(2)} KB</p>

      {/* Action Buttons */}
      <button onClick={onPreview} style={{ marginRight: '0.5rem' }}>
        Preview File
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default FileInfo;

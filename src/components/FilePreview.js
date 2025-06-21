import React from 'react';
import TextFileReader from './TextFileReader';

// Handles preview of image, text, and PDF files
function FilePreview({ fileInfo, fileObject }) {
  if (!fileInfo || !fileObject) return null;

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>File Preview:</h3>

      {/* Preview Image */}
      {fileInfo.type.startsWith('image/') && (
        <img
          src={URL.createObjectURL(fileObject)}
          alt="Preview"
          style={{ maxWidth: '300px', border: '1px solid #ccc' }}
        />
      )}

      {/* Preview Text */}
      {fileInfo.type.startsWith('text/') && (
        <pre style={{ background: '#f4f4f4', padding: '1rem' }}>
          <TextFileReader file={fileObject} />
        </pre>
      )}

      {/* Preview PDF */}
      {fileInfo.type === 'application/pdf' && (
        <iframe
          title="PDF Preview"
          src={URL.createObjectURL(fileObject)}
          width="100%"
          height="500px"
          style={{ border: '1px solid #ccc' }}
        />
      )}

      {/* Fallback for unsupported formats */}
      {!fileInfo.type.startsWith('image/') &&
        !fileInfo.type.startsWith('text/') &&
        fileInfo.type !== 'application/pdf' && (
          <p>Preview not supported for this file type.</p>
      )}
    </div>
  );
}

export default FilePreview;

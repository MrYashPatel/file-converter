import React, { useState } from 'react';

// Import modular components
import FileUpload from './components/FileUpload';
import FileInfo from './components/FileInfo';
import FilePreview from './components/FilePreview';

function App() {
  // State to store file details and preview status
  const [fileInfo, setFileInfo] = useState(null);
  const [fileObject, setFileObject] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  // Handle file upload and extract info
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileName = file.name;
    const fileType = file.type || 'Unknown MIME type';
    const fileExtension = fileName.split('.').pop().toLowerCase();

    setFileObject(file);       // Save raw file for preview
    setShowPreview(false);     // Reset preview state
    setFileInfo({
      name: fileName,
      type: fileType,
      extension: fileExtension,
      size: file.size,
    });
  };

  // Show preview section
  const handlePreview = () => {
    setShowPreview(true);
  };

  // Reset app state to initial
  const handleReset = () => {
    setFileInfo(null);
    setFileObject(null);
    setShowPreview(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>File Format Identifier + Preview</h2>

      {/* File input */}
      <FileUpload onChange={handleFileChange} />

      {/* Show file details and buttons */}
      {fileInfo && (
        <FileInfo
          fileInfo={fileInfo}
          onPreview={handlePreview}
          onReset={handleReset}
        />
      )}

      {/* Preview file if available */}
      {showPreview && (
        <FilePreview fileInfo={fileInfo} fileObject={fileObject} />
      )}
    </div>
  );
}

export default App;

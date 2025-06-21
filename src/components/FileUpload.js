import React from 'react';

// File input component
function FileUpload({ onChange }) {
  return (
    <input type="file" onChange={onChange} />
  );
}

export default FileUpload;

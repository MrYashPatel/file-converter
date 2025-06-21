import React, { useState, useEffect } from 'react';

// Reads plain text file content using FileReader
function TextFileReader({ file }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setContent(e.target.result);
    };
    reader.readAsText(file);
  }, [file]);

  return <code>{content}</code>;
}

export default TextFileReader;
 
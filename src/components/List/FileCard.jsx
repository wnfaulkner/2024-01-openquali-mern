// FileCard.jsx

import './FileCard.css';
// import pdfIcon from '../../images/pdf-icon.png';
import React from 'react';

export default function FileCard({ file, idx, openPdfViewer }) {
  // const openPdf = () => {
  //   // console.log('Open PDF clicked!');
  //   openPdfViewer(file.pdf);
  // };

  return (
    <div className="file-card">
      <p className="file-id">FILE</p>
    </div>
  );
}

import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PDFlink() {
  const link = "/oop.pdf";

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    setError(error.message);
  }

  return (
    <div style={{ display: "flex", flexDirection: "", alignItems: "center" }}>
      <div style={{marginLeft:"50px"}}>
        <h1>PDF Viewer</h1>
        {error ? (
          <p>Error loading PDF: {error}</p>
        ) : (
          <div
            className="pdf-container"
            style={{
              width: "40vh",
              height: "60vh",
              overflow: "auto",
              border: " 3px solid # ",
            }}
          >
            <Document
              file={link}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
            >
              <Page pageNumber={pageNumber} height={300} width={300} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        )}
        <div>
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <div style={{ marginLeft: "10vh" }}>
        <input type="text" placeholder="Ask AI" style={{ width: "40vh" ,  height: "5vh"}} />
        <button>Ask AI</button>
      </div>
    </div>
  );
}

export default PDFlink;

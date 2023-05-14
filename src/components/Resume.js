import { Button } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import myResume from "../resume/CV.pdf";
import { useState } from "react";
import { useScrollEffect } from "../hooks/useScrollEfect";

export const Resume = () => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [visible] = useScrollEffect("scrollEffectResume");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = myResume;
    link.download = "LautaroNievas.pdf";
    link.click();
  }
  return (
    <div
      className={`container-resume scrollEffectResume ${visible && "visible"}`}
    >
      <h1>Resume</h1>
      <Button className="button-resume" onClick={handleDownload}>
        Download Resume
      </Button>
      <Document file={myResume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page renderTextLayer={false} pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

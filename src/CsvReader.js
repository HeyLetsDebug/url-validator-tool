import React from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

function ReactCSV() {
  const handleForce = (data, fileInfo) => console.log(data, fileInfo);

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_")
  };

  return (
    <div className="container">
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
    </div>
  );
}
export default ReactCSV;

import { useState } from "react";
import ParsePDB from "../utils/ParsePDB";

function LoadPDBFile({ onLoad }) { // accept onLoad as a prop
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  function handleFileSelection(event) {
    const file = event.target.files[0];
    if (!file) return;

    // ensure the file is a .pdb (protein data bank) file
    if (!file.name.toLowerCase().endsWith(".pdb")) {
      setMessage("Only PDB (.pdb) files are allowed.");
      setContent("");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
    const text = e.target.result;
    setContent(text);
    const atoms = ParsePDB(text);
    onLoad(atoms);

    if (!text.startsWith("HEADER") && !text.includes("\nATOM")) {
      setMessage("This is not a valid PDB file.");
      setContent("");
      return;
    }

    setMessage(`Loaded PDB file: ${file.name}`);
};


    reader.readAsText(file);
  }

  return (
    <div style={{ position: 'absolute', top: 30, left: 10, zIndex: 10, padding: '1rem', borderRadius: '8px' }}>
      <label htmlFor="fileInput"><b>Click here to Upload Protein Data Bank (.pdb) File</b></label>
      <input id="fileInput" type="file" accept=".pdb" onChange={handleFileSelection} />
    </div>
  );

}

export default LoadPDBFile;

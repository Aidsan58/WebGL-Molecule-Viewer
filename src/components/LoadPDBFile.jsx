import { useState } from "react";
import parsePDB from "../utils/parsePDB";

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

      // simple validation for PDB format
      if (!text.startsWith("HEADER") && !text.includes("\nATOM")) {
        setMessage("This is not a valid PDB file.");
        setContent("");
        return;
      }

      setContent(text); // show the PDB content
      setMessage(`Loaded PDB file: ${file.name}`);

      // parse atoms and call callback
      const atoms = parsePDB(text);
      if (onLoad) onLoad(atoms);
    };

    reader.readAsText(file);
  }

  return (
    <>
      <label>Upload Protein Data Bank (.pdb) File</label>
      <input type="file" accept=".pdb" onChange={handleFileSelection} />
      {message && <p>{message}</p>}
      <pre>{content}</pre>
    </>
  );
}

export default LoadPDBFile;

import { useState } from "react";
import LoadPDBFile from "./LoadPDBFile";
import PDBScene from "./PDBScene";

function Game() {
  const [atoms, setAtoms] = useState([]);

  return (
    <>
      {/* UI LAYER */}
      <h1>WebGL Molecule Viewer</h1>
      <div className="ui">
        <LoadPDBFile onLoad={setAtoms} />
      </div>

      {/* 3D SCENE */}
      <PDBScene atoms={atoms} />
    </>
  );
}

export default Game;

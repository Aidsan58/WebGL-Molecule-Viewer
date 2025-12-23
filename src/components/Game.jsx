import { useState } from "react";
import LoadPDBFile from "./LoadPDBFile";
import PDBScene from "./PDBScene";
import "./../Game.css";

function Game() {
  const [atoms, setAtoms] = useState([]);

  return (
    <div className="game-container">
      {/* UI LAYER */}
      <div className="game-ui">
        <h1>WebGL Molecule Viewer</h1>
        <div className="file-selector-button">
          <LoadPDBFile onLoad={setAtoms} />
        </div>
      {/* 3D SCENE */}
      <div className="game-scene">
        <PDBScene atoms={atoms} />
      </div>
    </div>
    </div>
  );
}

export default Game;

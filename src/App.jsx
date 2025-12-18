import { useState } from 'react';
import LoadPDBFile from './components/LoadPDBFile';
import PDBScene from './components/PDBScene';

function App() {
  const [atoms, setAtoms] = useState([]);

  return (
    <>
      <h1>WebGL-Molecule-Viewer</h1>
      <LoadPDBFile onLoad={setAtoms} />
      <PDBScene atoms={atoms} />
    </>
  );
}

export default App;
import { useState } from 'react'
import './App.css'
import LoadPDBFile from './components/LoadPDBFile'
import PDBScene from './components/PDBScene'

function App() {
  const [atoms, setAtoms] = useState([]);

  return (
    <>
      <div>
      </div>
      <h1>WebGL-Molecule-Viewer</h1>
      <LoadPDBFile onLoad={setAtoms}>Load PDB File</LoadPDBFile>
      <PDBScene atoms={atoms} />
    </>
  )
}

export default App

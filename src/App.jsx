import { useState } from 'react'
import './App.css'
import LoadPDBFile from './components/LoadPDBFile'
import PDBScene from './components/PDBScene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      {/* <h1>WebGL-Molecule-Viewer</h1>
      <LoadPDBFile>Load PDB File</LoadPDBFile> */}
      <PDBScene />
    </>
  )
}

export default App

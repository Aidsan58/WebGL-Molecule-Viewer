import { useState } from 'react';
import LoadPDBFile from './components/LoadPDBFile';
import PDBScene from './components/PDBScene';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Game from './components/Game'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

function App() {
  const [atoms, setAtoms] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />        {/* Front page */}
          <Route path="/about" element={<About />} />
          <Route path="/molecule-viewer" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

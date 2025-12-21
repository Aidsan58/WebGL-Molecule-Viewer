import { useState } from 'react';
import LoadPDBFile from './components/LoadPDBFile';
import PDBScene from './components/PDBScene';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Game from "./components/Game";

function App() {
  const [atoms, setAtoms] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/molecule-viewer" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

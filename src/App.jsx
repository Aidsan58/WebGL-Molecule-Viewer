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
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/molecule-viewer"
            element={
              <Layout>
                <Game />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

function Game() {
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
    )
    
}

export default Game;
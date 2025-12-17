import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Atoms from "./Atoms";
import atoms from "./LoadPDBFile"

function PDBScene() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Atoms atoms={atoms} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default PDBScene;
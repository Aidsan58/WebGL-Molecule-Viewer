import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Atoms from "./Atoms";


function PDBScene({ atoms }) {
  return (
    <div id="canvas-container" style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Atoms atoms={atoms || []} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}


function Dummy( atoms ) {
  return (
    <div id="canvas-container" style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Atoms atoms={dummyAtoms} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}


export default Dummy;
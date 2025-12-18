import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Atoms from "./Atoms";


function PDBScene({ atoms }) {
  return (
    <Canvas
      tabIndex={0}
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      camera={{ position: [10, 10, 10], fov: 75 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 10]} />
      <Atoms atoms={atoms} />
      <OrbitControls
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
}


export default PDBScene;
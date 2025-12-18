import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function TestScene() {
  const dummyAtoms = [{ position: [0, 0, 0], radius: 0.5, color: 0xff0000 }];
  
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#222' }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        {dummyAtoms.map((atom, i) => (
          <mesh key={i} position={atom.position}>
            <sphereGeometry args={[atom.radius, 32, 32]} />
            <meshStandardMaterial color={atom.color} />
          </mesh>
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default TestScene;

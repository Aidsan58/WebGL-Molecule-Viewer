import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function CanvasContainer() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
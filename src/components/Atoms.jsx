function Atoms({ atoms }) {
  return (
    <>
      {atoms.map((atom, i) => (
        <mesh key={i} position={atom.position}>
          <sphereGeometry args={[atom.radius, 16, 16]} />
          <meshStandardMaterial color={atom.color} />
        </mesh>
      ))}
    </>
  );
}
const dummyAtoms = [{ position: [0,0,0], radius: 0.5, color: 0xff0000 }];

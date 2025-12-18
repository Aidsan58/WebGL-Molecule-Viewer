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

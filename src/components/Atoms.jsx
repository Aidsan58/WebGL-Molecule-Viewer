function Atoms({ atoms }) {
  return (
    <>
      {atoms.map((atom, i) => (
        <mesh key={i} position={atom.position}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="cyan" />
        </mesh>
      ))}
    </>
  );
}

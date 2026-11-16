export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#2dd4bf" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#14b8a6" />
    </>
  );
}

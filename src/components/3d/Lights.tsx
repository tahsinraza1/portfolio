export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#0099cc" />
      <pointLight position={[0, 0, 8]} intensity={0.6} color="#00d9ff" />
    </>
  );
}

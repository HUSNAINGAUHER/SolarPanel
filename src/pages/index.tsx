import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import * as three from "three";

const Cube = ({ position }: { position: number[] }) => {
  const cube = useRef<any>();

  const a = new three.Vector3(position[0], position[1], position[2]);
  return (
    <mesh ref={cube} position={a}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0391BA" />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <gridHelper />
      <axesHelper />

      <pointLight intensity={1.0} position={[500, 0, 0]} />
      <pointLight intensity={1.0} position={[-500, 0, 0]} />
      <pointLight intensity={1.0} position={[0, 500, 0]} />
      <pointLight intensity={1.0} position={[0, -500, 0]} />
      <pointLight intensity={1.0} position={[0, 0, 500]} />
      <pointLight intensity={1.0} position={[0, 0, -500]} />

      <pointLight intensity={1.0} position={[0, 0, 0]} />
      <Cube position={[1, 0.5, 0]} />
      <Cube position={[0, 0.5, 3]} />
    </>
  );
};
const Index = () => {
  return (
    <>
      <h1> 3D ENV IN PROGRESS ... </h1>

      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Canvas
          camera={{
            near: 0.1,
            far: 1000,
            zoom: 1,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor("#252934");
          }}
        >
          <Stats />
          <OrbitControls />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Index;

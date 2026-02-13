import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei';

function MovingSphere({ position, color, scale = 1, speed = 1, distort = 0.5 }) {
  const mesh = useRef(null);

  return (
    <Float rotationIntensity={1} floatIntensity={2} speed={speed}>
      <Sphere ref={mesh} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.1}
          distort={distort}
          speed={speed}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-deep-space-black overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00E5FF" />

        {/* Deep Navy Sphere (Foundation) */}
        <MovingSphere position={[-2, 0, -2]} color="#001F3F" scale={2.0} speed={1.2} distort={0.4} />

        {/* Dark Void Sphere */}
        <MovingSphere position={[3, 1, -4]} color="#000000" scale={2.8} speed={1.0} distort={0.5} />

        {/* Electric Cyan Sphere (Accent) */}
        <MovingSphere position={[2, -1.5, 0]} color="#00E5FF" scale={1.3} speed={2.5} distort={0.3} />

        <Environment preset="city" />

        {/* Fog for depth blending */}
        <fog attach="fog" args={['#000000', 5, 20]} />
      </Canvas>

      {/* Subtle blur for "blurred transparency" feel */}
      <div className="absolute inset-0 backdrop-blur-[20px] bg-black/20 pointer-events-none"></div>
    </div>
  );
}

"use client";
import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();

  const COUNT = 4000;
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (!points.current) return;
    points.current.rotation.y += 0.0003 * 60 * dt;
    points.current.rotation.x += 0.0001 * 60 * dt;
    const mx = (mouse.x * viewport.width) / 4;
    const my = (mouse.y * viewport.height) / 4;
    points.current.position.x += (mx - points.current.position.x) * 0.02;
    points.current.position.y += (my - points.current.position.y) * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        sizeAttenuation
        color={"#9ad8f0"}
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

"use client";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const globalMouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (e) => {
    globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

export default function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const COUNT = 4000;



  const posArray = useRef<Float32Array | null>(null);
  if (!posArray.current) {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    posArray.current = arr;
  }

  useFrame((_, dt) => {
    if (!points.current) return;
    points.current.rotation.y += 0.0003 * 60 * dt;
    points.current.rotation.x += 0.0001 * 60 * dt;

    const mx = (globalMouse.x * viewport.width) / 4;
    const my = (globalMouse.y * viewport.height) / 4;
    points.current.position.x += (mx - points.current.position.x) * 0.04;
    points.current.position.y += (my - points.current.position.y) * 0.04;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[posArray.current!, 3]}
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

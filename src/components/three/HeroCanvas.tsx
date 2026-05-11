"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((m) => m.Canvas),
  { ssr: false }
);

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
});

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(14,165,233,0.10), transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(255,255,255,0.04), transparent 60%)",
        }}
      />
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ pointerEvents: "none" }}
        >
          <ParticleField />
        </Canvas>
      </Suspense>
    </div>
  );
}

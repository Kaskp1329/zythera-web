"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Core } from "./Core";

export function EnergyCoreScene() {
  return (
    <div className="absolute inset-0 z-0 h-[100vh] w-full overflow-hidden bg-pure-black">
      {/* Background glow behind the core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-quantum-orange/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Bottom perspective grid overlay (CSS instead of 3D for better performance/look) */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-[linear-gradient(to_top,rgba(255,106,0,0.1),transparent)] pointer-events-none" style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" 
             style={{ transform: "rotateX(75deg) scale(2) translateY(50%)" }} />
      </div>

      <Canvas 
        dpr={[1, 2]} // Limit device pixel ratio for performance
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />
        
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 10, 30]} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#ff8c00" />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <Core />
        
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.2} 
            luminanceSmoothing={0.9} 
            intensity={1.5}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

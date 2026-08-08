"use client";

import * as React from "react";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useAppStore } from "@/store/useAppStore";

export function ParticleSystem({ count = 2000, radius = 5 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { aiState } = useAppStore();

  const getSpeedMultiplier = () => {
    switch (aiState) {
      case "PROCESSING": return 4.0;
      case "THINKING": return 2.5;
      case "SPEAKING": return 1.5;
      case "LISTENING": return 1.2;
      case "ERROR": return 0.2;
      case "OFFLINE": return 0.05;
      case "IDLE": default: return 0.5;
    }
  };

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      // Variable radius for depth
      const r = radius * Math.cbrt(Math.random());

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color variation based on state would be handled in shader, 
      // but we can set base colors here
      const mixedColor = Math.random() > 0.8 ? "#ffd700" : "#ff6a00";
      color.set(mixedColor);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const speed = getSpeedMultiplier();
    
    pointsRef.current.rotation.y += delta * 0.05 * speed;
    pointsRef.current.rotation.x += delta * 0.02 * speed;
    
    // Pulse effect
    if (aiState === "SPEAKING" || aiState === "PROCESSING") {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.05;
      pointsRef.current.scale.set(scale, scale, scale);
    } else if (aiState === "THINKING") {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      pointsRef.current.scale.set(scale, scale, scale);
    } else {
      // Return to normal scale smoothly
      pointsRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={aiState === "OFFLINE" ? 0.2 : 0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

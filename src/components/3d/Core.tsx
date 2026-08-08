"use client";

import * as React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useAppStore } from "@/store/useAppStore";
import { ParticleSystem } from "./ParticleSystem";
import { OrbitalRings } from "./OrbitalRings";

export function Core() {
  const coreRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const { aiState } = useAppStore();

  const getTargetScale = () => {
    switch (aiState) {
      case "PROCESSING": return 1.2;
      case "THINKING": return 1.1;
      case "SPEAKING": return 1.05;
      case "ERROR": return 0.9;
      case "OFFLINE": return 0.8;
      case "LISTENING":
      case "IDLE":
      default: return 1.0;
    }
  };

  const getCoreColor = () => {
    if (aiState === "ERROR") return "#ff3300";
    if (aiState === "OFFLINE") return "#333333";
    if (aiState === "PROCESSING" || aiState === "THINKING") return "#ffd700";
    return "#ff6a00";
  };

  useFrame((state, delta) => {
    if (!coreRef.current || !innerSphereRef.current || !outerSphereRef.current) return;
    
    // Smooth scaling
    const targetScale = getTargetScale();
    coreRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);

    // Rotation
    const speed = aiState === "PROCESSING" ? 3 : aiState === "THINKING" ? 2 : 1;
    innerSphereRef.current.rotation.y += delta * 0.5 * speed;
    outerSphereRef.current.rotation.y -= delta * 0.2 * speed;
    outerSphereRef.current.rotation.z += delta * 0.1 * speed;

    // Breathing effect when IDLE
    if (aiState === "IDLE") {
      const breathe = Math.sin(state.clock.elapsedTime * 2) * 0.02;
      coreRef.current.scale.x = targetScale + breathe;
      coreRef.current.scale.y = targetScale + breathe;
      coreRef.current.scale.z = targetScale + breathe;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Inner bright energy core */}
      <Sphere ref={innerSphereRef} args={[1.5, 32, 32]}>
        <meshBasicMaterial 
          color={getCoreColor()} 
          transparent 
          opacity={aiState === "OFFLINE" ? 0.3 : 0.9} 
        />
      </Sphere>

      {/* Outer geodesic/wireframe shell */}
      <Sphere ref={outerSphereRef} args={[1.8, 16, 16]}>
        <meshBasicMaterial 
          color={getCoreColor()} 
          wireframe 
          transparent 
          opacity={aiState === "OFFLINE" ? 0.1 : 0.3} 
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Transparent outer energy shell */}
      <Sphere args={[2.0, 32, 32]}>
        <meshPhysicalMaterial 
          color={getCoreColor()}
          transparent
          opacity={aiState === "OFFLINE" ? 0.05 : 0.15}
          transmission={0.9}
          roughness={0.1}
          ior={1.5}
          thickness={0.5}
        />
      </Sphere>

      <ParticleSystem count={aiState === "OFFLINE" ? 500 : 2500} radius={6} />
      <OrbitalRings />
    </group>
  );
}

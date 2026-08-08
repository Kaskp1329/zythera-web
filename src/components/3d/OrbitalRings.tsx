"use client";

import * as React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useAppStore } from "@/store/useAppStore";

export function OrbitalRings() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const { aiState } = useAppStore();

  const getSpeedMultiplier = () => {
    switch (aiState) {
      case "PROCESSING": return 3.5;
      case "THINKING": return 2.5;
      case "SPEAKING": return 1.5;
      case "LISTENING": return 1.2;
      case "ERROR": return 0.5;
      case "OFFLINE": return 0.1;
      case "IDLE": default: return 1.0;
    }
  };

  useFrame((state, delta) => {
    if (!groupRef.current || !ring1Ref.current || !ring2Ref.current || !ring3Ref.current) return;
    
    const speed = getSpeedMultiplier();
    
    ring1Ref.current.rotation.x += delta * 0.2 * speed;
    ring1Ref.current.rotation.y += delta * 0.3 * speed;
    
    ring2Ref.current.rotation.y -= delta * 0.15 * speed;
    ring2Ref.current.rotation.z += delta * 0.25 * speed;
    
    ring3Ref.current.rotation.x -= delta * 0.1 * speed;
    ring3Ref.current.rotation.z -= delta * 0.2 * speed;
    
    // Slight overall group rotation
    groupRef.current.rotation.y += delta * 0.05 * speed;
  });

  const getOpacity = () => {
    if (aiState === "OFFLINE") return 0.1;
    if (aiState === "ERROR") return 0.3;
    return 0.5;
  };

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: aiState === "ERROR" ? 0xff3300 : 0xff8c00,
    transparent: true,
    opacity: getOpacity(),
    wireframe: true,
    side: THREE.DoubleSide
  });

  return (
    <group ref={groupRef}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <primitive object={ringMaterial} attach="material" />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3.8, 0.01, 16, 100]} />
        <primitive object={ringMaterial} attach="material" />
      </mesh>
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[4.5, 0.02, 16, 100]} />
        <primitive object={ringMaterial} attach="material" />
      </mesh>
    </group>
  );
}

"use client";

import * as React from "react";
import { Modal } from "@/components/ui/Modal";
import { useAppStore } from "@/store/useAppStore";

export function PromoModal() {
  const { isPromoModalOpen, setPromoModalOpen } = useAppStore();

  return (
    <Modal 
      isOpen={isPromoModalOpen} 
      onClose={() => setPromoModalOpen(false)}
      className="max-w-4xl p-1 bg-black border-white/20"
    >
      <div className="relative aspect-video bg-pure-black w-full overflow-hidden rounded flex items-center justify-center group">
        {/* Scan lines */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
        
        {/* Placeholder for video player - replace video source with actual asset later */}
        <video 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          controls
          autoPlay
          playsInline
        >
          {/* User has the video, they will replace the src below */}
          <source src="/placeholder-promo.mp4" type="video/mp4" />
          <p className="text-white">Your browser does not support HTML5 video.</p>
        </video>
        
        {/* "Video Missing" overlay (hidden if video plays) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 bg-black">
          <div className="w-16 h-16 rounded-full border border-quantum-orange/50 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-quantum-orange ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-orbitron text-white">PROMO VIDEO OFFLINE</h3>
          <p className="text-white/50 text-sm mt-2 font-mono">PLEASE INSERT VIDEO ASSET</p>
        </div>
      </div>
    </Modal>
  );
}

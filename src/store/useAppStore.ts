import { create } from 'zustand';

export type AIState = 'IDLE' | 'LISTENING' | 'THINKING' | 'SPEAKING' | 'PROCESSING' | 'ERROR' | 'OFFLINE';

interface AppState {
  aiState: AIState;
  setAIState: (state: AIState) => void;
  
  isWaitlistModalOpen: boolean;
  setWaitlistModalOpen: (isOpen: boolean) => void;
  
  isPromoModalOpen: boolean;
  setPromoModalOpen: (isOpen: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  aiState: 'IDLE',
  setAIState: (state) => set({ aiState: state }),
  
  isWaitlistModalOpen: false,
  setWaitlistModalOpen: (isOpen) => set({ isWaitlistModalOpen: isOpen }),
  
  isPromoModalOpen: false,
  setPromoModalOpen: (isOpen) => set({ isPromoModalOpen: isOpen }),
}));

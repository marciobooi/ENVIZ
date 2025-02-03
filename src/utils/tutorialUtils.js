import { create } from 'zustand';

export const useTutorial = create((set) => ({
    isTutorialOpen: false,
    startTutorial: () => set({ isTutorialOpen: true }),
    endTutorial: () => set({ isTutorialOpen: false }),
}));

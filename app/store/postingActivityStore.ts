import { create } from "zustand";

interface postingActivityState {
  postingGubun: number;
  setPostingGubun: (newGubun: number) => void;
}

export const postingActivityStore = create<postingActivityState>((set) => ({
  postingGubun: 0,
  setPostingGubun: (newGubun) => set({ postingGubun: newGubun }),
}));

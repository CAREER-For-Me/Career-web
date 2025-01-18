import { create } from "zustand";

interface jobSelectionState {
  selectedValue1: string;
  selectedValue2: string;
  selectedJobs: { job: string; detail: string }[]; // 직무와 세부 직무 쌍 배열 추가
  setSelectedValue1: (value: string) => void;
  setSelectedValue2: (value: string) => void;
  addJobPair: () => void; // 직무와 세부 직무 쌍 배열에 추가
  removeJobPair: (index: number) => void; // 직무와 세부 직무 쌍 배열에서 삭제
}
export const jobSelectionStore = create<jobSelectionState>((set) => ({
  selectedValue1: "",
  selectedValue2: "",
  selectedJobs: [],
  setSelectedValue1: (value) => set({ selectedValue1: value }),
  setSelectedValue2: (value) => set({ selectedValue2: value }),
  addJobPair: () => {
    set((state) => {
      if (state.selectedValue1 && state.selectedValue2) {
        return {
          selectedJobs: [
            ...state.selectedJobs,
            { job: state.selectedValue1, detail: state.selectedValue2 },
          ],
        };
      }
      return state;
    });
  },
  removeJobPair: (index) => {
    set((state) => {
      const newSelectedJobs = state.selectedJobs.filter((_, i) => i !== index);
      return { selectedJobs: newSelectedJobs };
    });
  },
}));

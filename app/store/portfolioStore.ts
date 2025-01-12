import { create } from "zustand";

interface AcademicData {
  grade: string;
  university: string;
  academicState: string;
  major: string;
  totalGPA: string;
  majorGPA: string;
}

interface PortfolioStore {
  academicData: AcademicData;
  setAcademicData: (data: Partial<AcademicData>) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  academicData: {
    grade: "",
    university: "",
    academicState: "",
    major: "",
    totalGPA: "",
    majorGPA: "",
  },
  setAcademicData: (data) =>
    set((state) => ({
      academicData: { ...state.academicData, ...data },
    })),
}));

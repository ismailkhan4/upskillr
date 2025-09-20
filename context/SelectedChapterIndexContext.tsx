import { createContext, Dispatch, SetStateAction } from "react";

export interface SelectedChapterIndexContextType {
  selectedChapterIndex: number;
  setSelectedChapterIndex: Dispatch<SetStateAction<number>>;
}

export const SelectedChapterIndexContext =
  createContext<SelectedChapterIndexContextType | null>(null);

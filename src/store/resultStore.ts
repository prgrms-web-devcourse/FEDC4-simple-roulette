import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ResultStore {
  results: string[];
  addResult: (result: string) => void;
  clearItems: () => void;
}

export const resultStore = create<ResultStore>()(
  devtools(
    persist(
      (set) => ({
        results: [],
        addResult: (result: string) => {
          set((state) => ({ results: [...state.results, result] }));
        },
        clearItems: () => {
          set(() => ({ results: [] }));
        }
      }),
      {
        name: 'result-storage'
      }
    )
  )
);

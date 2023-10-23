import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ResultStore {
  results: string[][];
  addResult: (result: string, id: string) => void;
  clearItems: () => void;
}

export const resultStore = create<ResultStore>()(
  devtools(
    persist<ResultStore>(
      (set) => ({
        results: [],
        addResult: (result: string, id: string) => {
          set((state) => ({ results: [...state.results, [result, id]] }));
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

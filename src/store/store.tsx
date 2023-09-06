import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ItemInfo {
  checked: boolean;
  value: string;
  ratio: number;
}

interface ItemStore {
  items: ItemInfo[];
  addItem: (item: ItemInfo) => void;
  clearItems: () => void;
}

export const pageStore = create<ItemStore>()(
  devtools(
    persist(
      (set) => ({
        items: [{ checked: true, value: '', ratio: 1 }],
        // 항목 추가
        addItem: (item) => {
          set((state) => ({
            items: [...state.items, item]
          }));
        },
        // 리스트 새로고침
        clearItems: () => {
          set({
            items: [{ checked: true, value: '', ratio: 1 }]
          });
        }
      }),
      {
        name: 'item-storage'
      }
    )
  )
);

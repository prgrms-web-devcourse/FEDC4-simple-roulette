import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 } from 'uuid';

interface ItemInfo {
  checked: boolean;
  value: string;
  ratio: number;
  id: string;
}

interface ItemStore {
  items: ItemInfo[];
  addItem: (item: ItemInfo) => void;
  clearItems: () => void;
  toggleCheckbox: (id: string) => void;
  setValue: ({ id, value }: { id: string; value: string }) => void;
  setRatio: ({ id, ratio }: { id: string; ratio: number }) => void;
}

export const pageStore = create<ItemStore>()(
  devtools(
    persist(
      (set) => ({
        items: [{ checked: true, value: '', ratio: 1, id: v4() }],
        // 항목 추가
        addItem: (item) => {
          set((state) => ({
            items: [...state.items, item]
          }));
        },
        // 리스트 새로고침
        clearItems: () => {
          set({
            items: [{ checked: true, value: '', ratio: 1, id: v4() }]
          });
        },
        // 체크박스 수정
        toggleCheckbox: (id) => {
          set((state) => ({
            items: state.items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
          }));
        },
        // 항목 수정
        setValue: ({ id, value }) => {
          set((state) => ({
            items: state.items.map((item) => (item.id === id ? { ...item, value } : item))
          }));
        },
        // 비율 수정
        setRatio: ({ id, ratio }) => {
          set((state) => ({
            items: state.items.map((item) => (item.id === id ? { ...item, ratio } : item))
          }));
        }
      }),
      {
        name: 'item-storage'
      }
    )
  )
);

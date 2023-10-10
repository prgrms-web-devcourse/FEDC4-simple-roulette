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
  addItem: (newItems?: ItemInfo[]) => void; // Make newItems optional
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
        addItem: (newItems?: ItemInfo[]) => {
          if (newItems) {
            set((state) => ({
              items: [...state.items, ...newItems]
            }));
          } else {
            set((state) => ({
              items: [...state.items, { checked: true, value: '', ratio: 1, id: v4() }]
            }));
          }
        },
        clearItems: () => {
          set({
            items: [{ checked: true, value: '', ratio: 1, id: v4() }]
          });
        },
        toggleCheckbox: (id) => {
          set((state) => ({
            items: state.items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
          }));
        },
        setValue: ({ id, value }) => {
          set((state) => ({
            items: state.items.map((item) => (item.id === id ? { ...item, value } : item))
          }));
        },
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

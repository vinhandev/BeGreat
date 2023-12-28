import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { MMKVStorage } from './mmkv';

type UserDayType = {
  face: string;
  body: string;
  weight: number;
  height: number;
  date: Date;
  meals: {
    name: string;
    description: string;
    image: string;
    calories: number;
  }[];
};
type InitState = {
  listOfDays: UserDayType[];
  isLoading: boolean;
  loadingMessage: string;
  setLoadingIn: (loadingMessage: string) => void;
  setLoadingOut: () => void;
};

export const useUserStore = create<InitState>()(
  persist(
    (set) => ({
      listOfDays: [],
      isLoading: false,
      loadingMessage: '',
      setLoadingIn: (loadingMessage: string) =>
        set(() => ({ isLoading: true, loadingMessage })),
      setLoadingOut: () => set(() => ({ isLoading: false })),
    }),
    {
      name: 'user-settings-storage',
      storage: createJSONStorage(() => MMKVStorage),
    }
  )
);

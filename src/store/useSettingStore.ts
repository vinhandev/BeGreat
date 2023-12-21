import { create } from 'zustand';

type InitState = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  openBottomSheet: boolean;
  setOpenBSHeet: (openBottomSheet: boolean) => void;
};

export const useSettingStore = create<InitState>()((set) => ({
  isLoading: false,
  loadingMessage: '',
  setLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  openBottomSheet: false,
  setOpenBSHeet: (openBottomSheet: boolean) =>
    set(() => ({
      openBottomSheet,
    })),
}));

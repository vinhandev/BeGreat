import { BottomSheetType } from '@/components/molecules/common/BottomSheet/BottomSheet';
import { create } from 'zustand';

type InitState = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  openBottomSheet: boolean;
  typeBottomSheet: BottomSheetType;
  setOpenSheet: (openBottomSheet: boolean, type?: BottomSheetType) => void;
};

export const useSettingStore = create<InitState>()((set) => ({
  isLoading: false,
  loadingMessage: '',
  setLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  openBottomSheet: false,
  typeBottomSheet: 'image',
  setOpenSheet: (openBottomSheet: boolean, type?: BottomSheetType) =>
    set(() => ({
      openBottomSheet,
      typeBottomSheet: type,
    })),
}));

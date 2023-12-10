import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { MMKVStorage } from './mmkv'

type InitState = {
    isLoading: boolean,
    loadingMessage: string,
    setLoadingIn: (loadingMessage: string) => void
    setLoadingOut: () => void
}

export const useUserStore = create<InitState>()(
    persist((set) => ({
        isLoading: false,
        loadingMessage: '',
        setLoadingIn: (loadingMessage: string) => set(() => ({ isLoading: true, loadingMessage })),
        setLoadingOut: () => set(() => ({ isLoading: false }))
    }), {
        name: 'user-settings-storage',
        storage: createJSONStorage(() => MMKVStorage)
    })
)

import { create } from "zustand";

interface UserStoreType {
  user: string | null;
  setUser: (newUser: string) => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
}));

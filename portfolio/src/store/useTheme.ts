import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
    theme: "light" | "dark";
    toggleTheme: () => void;
    setTheme:(theme:"light" | "dark") => void;
}

export const useTheme = create<ThemeState>()(
    persist(
        (set) => ({
            theme: "dark",

            toggleTheme: () => set((state) => ({
                theme: state.theme === "light"? "dark" : "light"
            })),

            setTheme: (theme) => set({theme})
        }),
        {
            name:"theme"
        }
    ));
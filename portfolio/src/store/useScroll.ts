import { create } from "zustand";

interface ScrollSection {
    scrollToSection : (id: string) => void;
}

export const useScroll =  create<ScrollSection>(() => ({
    scrollToSection: (id: string) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior: "smooth"});
        }
    },
}));
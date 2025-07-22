import { RiCloseLine, RiMenu2Line, RiMoonFill, RiSunFill } from '@remixicon/react';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../store/useTheme';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    useEffect(()=> {
        const handleScroll = () => {
            if(window.scrollY > 10){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={`fixed w-full transition-all duration-300 z-50 flex flex-wrap justify-between
            items-center px-10 py-6 md:px-20
            ${scrolled ? 'bg-gray-800  dark:bg-gray-300 shadow-xl' : 'bg-transparent py-4'}
            `}>
            <span className='text-2xl text-gray-100 dark:text-gray-700 font-bold tracking-wide'>Anita Neupane</span>

            <div className="flex flex-row gap-4">
                <button className="block md:hidden mr-12" onClick={toggleTheme}>
                    {theme === "dark"? (
                        <RiMoonFill className='text-gray-100 dark:text-gray-700'/>
                    ): (
                        <RiSunFill className='text-gray-100 dark:text-gray-700'/>
                    )}
                </button>

                <button 
                    className='md:hidden absolute right-10 top-6 transition-all duration-300'
                    onClick={handleMenuToggle}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <RiCloseLine className='text-gray-100 dark:text-gray-700' size={30} /> : <RiMenu2Line className='text-gray-100 dark:text-gray-700' size={30} />}
                </button>
            </div>

            <ul className={`${isMenuOpen ? "block" : "hidden"} 
                w-full md:w-auto mx-0 py-4 mt-4 md:mt-0 font-semibold
                text-center md:flex md:items-center md:justify-end gap-6
                rounded-lg transition-all duration-300
                bg-gray-400 md:bg-transparent md:dark:bg-transparent
                shadow-md dark:shadow-gray-700 md:shadow-none
                px-4 md:px-0 scroll-smooth
            `}>

                {["Home", "About", "Projects", "Contact"].map(item => (
                    <li key={item}>
                    <a
                     onClick={() => scrollToSection(`${item.toLowerCase()}`)}
                     className='text-base cursor-pointer transition-all text-gray-100 dark:text-gray-700 duration-300 p-1 md:p-0 hover:text-gray-300 dark:hover:text-[var(--primary)] block md:inline-block'
                    >
                        {item}
                    </a>
                </li>
                ))}

                <li>
                    <button className={`${isMenuOpen ? "hidden" : "block"}`} onClick={toggleTheme}>
                        {theme === "dark"? (
                            <RiMoonFill className='text-gray-100 dark:text-gray-700'/>
                        ): (
                            <RiSunFill className='text-gray-100 dark:text-gray-700'/>
                        )}
                    </button>
                </li>
                
            </ul>

        </nav>
    )
}

export default Navbar;
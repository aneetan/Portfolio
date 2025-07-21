import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useEffect, useState } from 'react';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

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
        <nav className={` fixed w-full transition-all duration-300 z-50 flex flex-wrap justify-between
            items-center px-10 py-6 md:px-20
            ${scrolled ? 'bg-gray-800 shadow-xl' : 'bg-transparent py-4'}
            `}>
            <span className='text-2xl text-gray-100 font-bold tracking-wide'>Portfolio</span>

            {/* Mobile menu button */}
            <button 
                className='md:hidden absolute right-10 top-6 transition-all duration-300'
                onClick={handleMenuToggle}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
            </button>

            {/* Navigation links */}
            <ul className={`${isMenuOpen ? "block" : "hidden"} 
                w-full mx-24 py-2 mt-4 font-semibold md:mt-5 bg-transparent px-2 rounded-xl bg-opacity-30
                md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex md:w-auto gap-6`}>

                {["Home", "About", "Projects", "Contacts"].map(item => (
                    <li key={item}>
                    <a
                     href={`#${item}`}
                     className='text-md transition-all text-gray-100 duration-300 p-1 md:p-0 hover:text-gray-300 block md:inline-block'
                    >
                        {item}
                    </a>
                </li>
                ))}
                
            </ul>
        </nav>
    )
}

export default Navbar;
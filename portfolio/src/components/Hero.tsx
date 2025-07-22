import Image from '../assets/images/profile.png';
import { useScroll } from '../store/useScroll';

const Hero = () => {
    const {scrollToSection} = useScroll();

  return (
        <section id='home' className="min-h-screen bg-gray-800 dark:bg-gray-300 flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="w-full lg:w-1/2 order-1 lg:order-1 transition-all duration-700 ease-in-out transform opacity-0 translate-y-10 animate-fadeInUp">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex gap-2 items-baseline mb-4 md:mb-6">
                            <span className="font-bold text-3xl sm:text-4xl text-gray-100 dark:text-gray-800 transition-all duration-300">Hello</span>
                            <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
                        </div>

                        <div className="relative mb-6 md:mb-8">
                            <hr className="hidden lg:block w-32 border-t-4 border-[var(--primary-dark)] absolute -left-36 top-1/2 transform -translate-y-1/2 transition-all duration-1000 delay-200 animate-pulse" />
                            <span className="font-base text-gray-100 dark:text-gray-800 text-3xl sm:text-4xl lg:pl-8 transition-all duration-300">I'm Anita</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-100 dark:text-gray-800 mb-6 md:mb-8 transition-all duration-500 hover:scale-105 hover:text-[var(--primary-dark)]">
                            Software Developer
                        </h1>
                        
                        <button
                        onClick={() => scrollToSection(`contact`)}
                        className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white text-lg sm:text-xl font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
                            Contact Me
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 order-2 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-150 z-10 mt-12">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md group">
                        <div className="absolute inset-0 bg-[var(--primary-dark)] opacity-20 rounded-full blur-xl transition-all duration-1000 group-hover:opacity-30 group-hover:scale-110"></div>
                        <img 
                            className="w-full h-auto object-cover rounded-lg transition-all duration-700 ease-in-out transform opacity-0 -translate-x-10 animate-fadeInRight hover:scale-105 hover:shadow-xl"
                            src={Image} 
                            alt="Anita's profile"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
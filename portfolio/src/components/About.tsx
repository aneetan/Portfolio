
const About = () => {
  return (
    <section id='about' className="min-h-screen bg-gray-800 flex items-center px-4 sm:px-8 md:px-12 lg:px-28 py-20 overflow-hidden">
    <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 order-2 md:order-1 transition-all duration-700 ease-in-out transform opacity-0 translate-y-10 animate-fadeInUp">
            <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-2 items-baseline mb-6">
                <span className="font-bold text-4xl text-gray-100 transition-all duration-300">Hello</span>
                <div className="w-2 h-2 bg-[var(--primary-dark)] rounded-full animate-pulse"></div>
            </div>

            <div className="relative mb-8">
                <hr className="w-40 border-t-6 border-[var(--primary-dark)] absolute -left-36 top-1/2 transform -translate-y-1/2 transition-all
                duration-1000 delay-200 animate-pulse" />
                <span className="font-normal text-gray-100 text-4xl pl-8 transition-all duration-300">I'm Anita</span>
            </div>

            <h1 className="text-5xl font-extrabold text-gray-100 mb-8 transition-all duration-500 hover:scale-105 hover:text-[var(--primary-dark)]">
                Software Developer
            </h1>
            
            <button className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white text-xl font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95">
                Contact Me
            </button>
            </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end transition-all duration-1000 delay-150">
            <div className="relative w-full max-w-md mt-12 group">
            <div className="absolute inset-0 bg-[var(--primary-dark)] opacity-20 rounded-full blur-xl transition-all duration-1000 group-hover:opacity-30 group-hover:scale-110"></div>
            <img 
                className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out transform opacity-0 -translate-x-10 animate-fadeInRight hover:scale-105 hover:shadow-2xl"
                src={Image} 
                alt="Anita's profile"
            />
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default About

import Learnovate from '../../assets/images/learnovate.png'

const Project2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-24">
        <div className="lg:w-1/2 order-2 lg:order-1 animate-fadeInLeft flex flex-col gap-4 sm:gap-6">
            <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-0 border-2 border-gray-300 rounded-lg  transform translate-x-4 -top-4 mb-6 z-0"></div>
                
                <img src={Learnovate} alt="Battleship game" className="relative z-10 border-2 border-gray-800 rounded-lg w-full h-auto"/>
            </div>
        </div>

        <div className="lg:w-1/2 order-2 lg:order-1 text-left animate-fadeInRight">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">Learnovate</h2>
                
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-500 text-gray-300 text-sm font-medium rounded-full">React.js</span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-500 text-gray-300 text-sm font-medium rounded-full">Spring(Java)</span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-500 text-gray-300 text-sm font-medium rounded-full">MySQL</span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-500 text-gray-300 text-sm font-medium rounded-full">Tailwind CSS</span>
            </div>
            
            <p className="text-gray-600 mb-8">
                A digital mentorship platform designed to bridge the gap between
                those seeking guidance and experienced mentors willing to offer it.
            </p>
            
            <a href="https://github.com/aneetan/Learnovate"
            className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white text-sm font-medium
                py-3 px-8 rounded-xl transition-all duration-300
                shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95">
                View Github
            </a>
        </div>
    </div>
  )
}

export default Project2

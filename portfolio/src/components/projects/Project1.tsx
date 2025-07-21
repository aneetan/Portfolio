
const Project1 = () => {
  return (
     <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-48">
        <div className="lg:w-1/2 order-2 lg:order-1 animate-fadeInLeft text-left">
                <h2 className="text-3xl font-bold text-gray-200 mb-4">ProofChain</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full">Django</span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full">HTML/CSS</span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full">Web3.js</span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full">Solidity</span>
                </div>
                
                <p className="text-gray-600 mb-8">
                    A decentralized, web-based Evidence Management System (EMS) designed to securely store and retrieve
                    criminal data, leveraging blockchain technology,
                    IPFS (InterPlanetary File System), and MetaMask to ensure the immutability and security of evidence.
                </p>
                
                <a href="https://github.com/aneetan/Evidence-Management-System"
                    className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white text-sm
                    font-medium py-3 px-8 rounded-xl transition-all duration-300
                    shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95">
                    View Github
                </a>

        </div>

        {/* Image Content - Animated from right */}
        <div className="lg:w-1/2 order-1 lg:order-2 animate-fadeInRight flex flex-col gap-4 sm:gap-6">
            <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-0 border-2 border-gray-300 rounded-lg  transform translate-x-4 -top-4 mb-6 z-0"></div>
                
                <img src="https://github.com/aneetan/Evidence-Management-System/raw/master/pictures/Screenshot%202025-01-14%20221158.png" alt="Battleship game" className="relative z-10 border-2 border-gray-800 rounded-lg w-full h-auto"/>
            </div>
        </div>
    </div>
  )
}

export default Project1

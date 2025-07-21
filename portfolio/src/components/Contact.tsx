import { RiGithubFill,  RiLinkedinFill, RiMailFill } from '@remixicon/react'

const Contact = () => {
  return (
     <section 
        id='contact' 
        className="min-h-screen bg-gray-800 dark:bg-gray-300 flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-8 sm:py-20 overflow-hidden"
        >
        <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="lg:w-1/2 order-1 lg:order-1 animate-fadeInLeft">
            <h2 className="text-gray-200  dark:text-gray-800  text-3xl sm:text-4xl md:text-5xl font-bold">
                Let's get in <span className="text-[var(--primary)]"> Touch</span>
                </h2>
        </div>

        <div className="lg:w-1/2 order-2 lg:order-2 animate-fadeInRight flex flex-col sm:gap-6">
            <ol className="relative text-gray-800 border-s-4 border-[var(--primary)] space-y-6">                  
            <li className="ms-6">            
                <div className="flex justify-start gap-4 items-center hover:text-[var(--primary)] p-2 rounded transition">
                    <RiLinkedinFill className='bg-gray-100 h-6 w-6 p-1 rounded'/>
                    <a href="https://linkedin.com/in/anita-neupane" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-600 hover:text-[var(--primary)] transition">
                        Anita Neupane
                    </a>
                </div>
            </li>
            
            <li className="ms-6">
                <div className="flex justify-start gap-4 items-center hover:text-[var(--primary)] p-2 rounded transition">
                    <RiMailFill className='bg-gray-100 h-6 w-6 p-1 rounded'/>
                    <a href="mailto:anita@example.com" className="text-sm sm:text-base text-gray-600 hover:text-[var(--primary)] transition">
                        anee.neu15@gmail.com
                    </a>
                </div>
            </li>

            <li className="ms-6">
                <div className="flex justify-start gap-4 items-center hover:text-[var(--primary)] p-2 rounded transition">
                    <RiGithubFill className='bg-gray-100 h-6 w-6 p-1 rounded'/>
                    <a href="https://github.com/anitaneupane" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-600 hover:text-[var(--primary)] transition">
                        @aneetan
                    </a>
                </div>
            </li>
        </ol>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Contact

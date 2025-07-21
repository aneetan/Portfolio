import { RiCodeBoxFill, RiComputerFill, RiDatabase2Fill } from "@remixicon/react"

const About = () => {
  return (
        <section 
        id='about' 
        className="min-h-screen bg-gray-800 flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-12 sm:py-20 overflow-hidden"
        >
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1 animate-fadeInLeft">
                <ol className="relative text-gray-800 border-s-4 border-[var(--primary)] space-y-8">                  
                <li className="ms-6">            
                    <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -start-2 bg-[var(--primary)]"></span>
                    <div className="flex justify-start gap-4 mb-2 items-center">
                    <RiComputerFill className="text-gray-100 text-xl"/>
                    <h3 className="font-bold text-lg sm:text-xl leading-tight text-gray-100">Frontend Development</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400">React, TypeScript, Tailwind CSS</p>
                </li>
                
                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -start-2 bg-[var(--primary)]"></span>
                    <div className="flex justify-start gap-4 mb-2 items-center">
                    <RiCodeBoxFill className="text-gray-100 text-xl"/>
                    <h3 className="font-bold text-lg sm:text-xl leading-tight text-gray-100">Backend Development</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400">Node.js, Express, Spring (Java), Django (Python)</p>
                </li>

                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -start-2 bg-[var(--primary)]"></span>
                    <div className="flex justify-start gap-4 mb-2 items-center">
                    <RiDatabase2Fill className="text-gray-100 text-xl"/>
                    <h3 className="font-bold text-lg sm:text-xl leading-tight text-gray-100">Database & DevOps</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400">MongoDB, PostgreSQL, Docker, Git</p>
                </li>
                </ol>
            </div>

            {/* Image Content - Animated from right */}
            <div className="lg:w-1/2 order-1 lg:order-2 animate-fadeInRight flex flex-col gap-4 sm:gap-6">
                <h2 className="text-gray-200 text-3xl sm:text-4xl md:text-5xl font-bold">
                About <span className="text-[var(--primary)]">Me</span>
                </h2>

                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Motivated and detail-oriented full-stack developer with strong expertise in JavaScript and Python ecosystems. 
                Experienced in building scalable web applications and creating innovative solutions through participation 
                in multiple hackathons. Passionate about clean code and efficient architecture.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "Java", "Python", "Django", "Spring", "MongoDB"].map((tech, index) => (
                    <span 
                    key={index}
                    className="text-xs sm:text-sm px-3 py-1 bg-gray-700 text-gray-200 rounded-full"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
  )
}

export default About

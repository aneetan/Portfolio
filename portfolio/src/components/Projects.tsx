import Project1 from "./projects/Project1"
import Project2 from "./projects/Project2"

const Projects = () => {
  return (
     <section 
        id='about' 
        className="min-h-screen bg-gray-900 flex px-4 sm:px-8 md:px-12 lg:px-16 py-24 xl:px-28 overflow-hidden"
        >
        <div className="container mx-auto text-center">
            <h2 className="text-gray-200 text-3xl sm:text-4xl md:text-5xl font-bold mb-8"> Projects </h2>
            <div className="flex flex-col items-center gap-1">
                <div className="border-l-4 border-[var(--primary-dark)] h-20 rounded"></div>
                <div className="w-3 h-3 bg-[var(--primary-dark)] rounded-full duration-1000"></div>
            </div>

            <Project1/>
            <Project2/>
        </div>
    </section>
  )
}

export default Projects

const Languages = () => {
  return (
    <div className='bg-gray-700 dark:bg-gray-200 py-8 px-4 shadow-lg transition-all duration-700 ease-in-out md:-mt-20 -mt-30 z-20'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center'>
            {["React", "Node", "Java", "Python", "Git", "Github"].map((item, index) => (
                <span 
                    key={index}
                    className='text-base sm:text-lg font-medium text-gray-400 dark:text-gray-500 transition-colors duration-300 w-full text-center px-3 py-2'
                >
                    {item}
                </span>
            ))}
        </div>
    </div>
  )
}

export default Languages

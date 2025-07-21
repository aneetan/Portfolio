const Languages = () => {
  return (
    <div className='bg-gray-700 py-8 px-18 shadow-lg transition-all duration-700 ease-in-out -mt-20 z-20'>
        <div className='flex flex-wrap justify-between items-center gap-6'>
            {["React", "Node", "Java", "Python", "Git", "Github"].map((item, index) => (
                <span 
                    key={index}
                    className='text-xl font-medium text-gray-400 transition-colors duration-300'
                >
                    {item}
                </span>
            ))}
        </div>
    </div>
  )
}

export default Languages

import { useNavigate } from "react-router"

const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
    <div className='w-[100vw]'>
        <section className="relative z-10 bg-primary py-12">
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-[100vw] py-12 px-4">
                    <div className="mx-auto max-w-[400px] text-center">
                     
                    <img 
                    className='px-22 w-100'
                    src="https://img.freepik.com/premium-vector/flat-modern-character-trying-connecting-cables-web-online-page-with-404-found-error_372769-2127.jpg?semt=ais_hybrid&w=740"/>
                    <h4 className="mb-6 font-extrabold text-5xl text-[var(--primary)]"> OOPS! </h4>
                    <p className="mb-8 text-lg text-black">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <button 
                    onClick={() => navigate("/")}
                    className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white text-lg
                    sm:text-xl font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300
                    shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
                        Go to Home
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </section>
      
    </div>
  )
}

export default NotFoundPage

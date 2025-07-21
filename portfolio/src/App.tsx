import { BrowserRouter, Routes } from 'react-router'
import './App.css'

function App() {
  const toggleDark = () => {
        document.documentElement.classList.toggle('dark');
      };

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      
    </Routes>
    </BrowserRouter> */}
      
      <button onClick={() => document.documentElement.classList.toggle('dark')}>
        Toggle Dark Mode
      </button>

      <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
        This box switches color in dark mode.
      </div>

      
    </>
  )
}

export default App

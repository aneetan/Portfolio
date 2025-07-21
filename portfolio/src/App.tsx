import "./App.css"
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import Languages from "./components/Languages";
import Projects from "./components/Projects";

function App() {
  const toggleDark = () => {
        document.documentElement.classList.toggle('dark');
      };

  return (
    <>
    <div className="h-auto w-full overflow-hidden">
      <Navbar />
        <Hero />
        <Languages/>
        <About/>
        <Projects/>
    </div>
    {/* <BrowserRouter>
    <Routes>
      
    </Routes>
    </BrowserRouter> */}
      
      

      
    </>
  )
}

export default App

import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero'
import Languages from '../components/Languages'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useTheme } from '../store/useTheme'

const Home = () => {
    const {theme} = useTheme();

    useEffect(() => {
            document.documentElement.classList.toggle("dark", theme === "dark");
        }, [theme]);
        
  return (
    <div className="h-auto w-full overflow-hidden scroll-smooth">
      <Navbar />
        <Hero />
        <Languages/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div> 
  )
}

export default Home

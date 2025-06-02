import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Resume from './components/Resume'
import About from './components/About'
import Loading from './components/Loading';
import { useEffect, useState } from 'react';
import Experiance from './components/Experiance'
import { themeContext } from './context'


function App() {
    // let [darkMode, setdarkMode] = useState(false)

    // let btn = <>
    // <button onClick={()=>setdarkMode(!darkMode)}>Theme</button>
    // </>
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
    {/* <themeContext.Provider value={{darkMode, setdarkMode,btn}}> */}
      <Navbar></Navbar>
      <div className="fade-in">
        <Home />
      </div>
      <About></About>
      <Project></Project>
      <Experiance></Experiance>
      <Resume></Resume>
      <Footer></Footer>
      {/* </themeContext.Provider> */}
    </>
  )
}

export default App
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import AboutPage from './Components/AboutPage/AboutPage';
import MyWork from './Components/MyWork/MyWork';
import Thankyou from './Components/Homepage/Thankyou';
import ThemeContext from './themeContext';
import { useEffect, useState } from 'react';


function App() {
  const [lightmode, setLightMode] = useState(true);
  const [accColor, setAccColor] = useState("#9d73c5");

  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
  useEffect(() => {
    const moveCursor = (e) => { 
      const x = e.clientX - 16
      const y = e.clientY - 16
      setCursorXY({ x, y })

    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])


  return (
    <ThemeContext.Provider value={{lightmode, setLightMode, accColor, setAccColor}}>
      <BrowserRouter>
          <div className="custom-cursor" 
          style={{
            transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
          }} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutme" element={<AboutPage />} />
            <Route path="/mywork" element={<MyWork />} />
            <Route path='/form-submitted' element={<Thankyou />}></Route>
          </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

import React, { useContext } from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import ThemeContext from '../../themeContext'
import HAboutme from './HAboutme'
import HMyWork from './HMyWork'
import Contact from './Contact'
import Footer from '../Footer/Footer'

import {motion} from 'framer-motion'

function Homepage() {
  
  const contextTheme = useContext(ThemeContext);
  const accColor = contextTheme.accColor;
  const backStyle  = {
    backgroundColor: contextTheme.lightmode ? "#fff" : "#26242C",
    color : contextTheme.lightmode ? "#000" : "#fff",
    borderColor : contextTheme.lightmode ? "#000" : "#fff"
  }


  
  return (
    <div className="outerHomeCont" style={backStyle}>
        <div className="textSection fxcn">
          <div className="smtxt">
          <img src="https://img.icons8.com/officexs/32/so-so.png" alt="so-so"/> <br /> Hi, I'm Vishal,
          </div>
          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration : 0.8 }}

          className="bgtxt">
              Crafting <span className="txtunderline"
              style={{
                backgroundImage: `linear-gradient(90deg, ${accColor}, ${accColor})`
              }}>Full Stack</span>&nbsp;
              Experiences 
              with Creativity.
          </motion.div>
          <div  className='btnContainer fxcn'>
            <Link to="/mywork">
              <button className="mainbtn"
              style={{
                backgroundColor: accColor
              }}>My Projects <i className="fa-solid fa-arrow-right-long"></i></button>
            </Link>
          </div>
        </div>
        <HAboutme />
        <HMyWork />
        <Contact />
        <Footer />
    </div>
  )
}

export default Homepage

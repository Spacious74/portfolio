import React, { useContext, useEffect, useState } from 'react'
import './About.css'
import facts from '../../facts'
import Footer from '../Footer/Footer'
import profilepic from '../../Resources/profile pic background less.png'
import ThemeContext from '../../themeContext'
import star from '../../Resources/star.png'
// skills imgs
import html from '../../Resources/skills/html.png'
import css from '../../Resources/skills/css.png'
import javascript from '../../Resources/skills/javascript.png'
import bootstrap from '../../Resources/skills/bootstrap.png'
import reactlogo from '../../Resources/skills/react.png'
import tailwind from '../../Resources/skills/tailwind.png'
import nodejs from '../../Resources/skills/node.png'
import express from '../../Resources/skills/express.png'
import mongodb from '../../Resources/skills/mongodb.png'
import mysql from '../../Resources/skills/mysql.png'
import jest from '../../Resources/skills/jest.png'
import render from '../../Resources/skills/render.svg'
import netlify from '../../Resources/skills/netlify.png'
import mongoatlas from '../../Resources/skills/mongoatlas.svg'
// certificates imgs
import relevel from '../../Resources/certificates/relevel certificate.jpg'
import phpc from '../../Resources/certificates/PHP certificate.jpg'
import jscert from '../../Resources/certificates/javascript certificate.jpg'
import csscert from '../../Resources/certificates/css certificate.png'

function AboutPage() {

  const contextTheme = useContext(ThemeContext);
  const accColor = contextTheme.accColor

  const backStyle  = {
    backgroundColor: contextTheme.lightmode ? "#fff" : "#26242C",
    color : contextTheme.lightmode ? "#000" : "#fff"
  }

  const certStyle = {
    backgroundColor : accColor+60
  }
  const cert_titleStyle = {
    backgroundColor : contextTheme.lightmode ? "#fff" : "#26242C"
  }
  const btnStyle = {
    border : "solid 1px " + accColor,
    color : accColor
  }

  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    generateRandomFact();
  }, []);

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndex]);
  };


  return (
    <div className='aboutMeContainer' style={backStyle}>
      <div className="about-image-cont fxcn" 
        style={{backgroundImage : `linear-gradient(${accColor} 2px, transparent 2px), linear-gradient(90deg, ${accColor} 2px, transparent 2px), linear-gradient(${accColor} 1px, transparent 1px), linear-gradient(90deg, ${accColor} 1px, transparent 1px)`,border : `solid 1px ${accColor}`,}}>
        <img src={profilepic} alt="" className="ab-img" />
      </div>

      <div className="about-text">
        <div className="heading">
          <img src={star} alt="" />
          I design digital interfaces</div>
        <div className="smtext">
          As i've discussed that from my early college days, I've been fascinated by the GUI of Web Apps, Android OS and iOS design language and always have a desire to customize some elements in my style but it is only possible after learning a stack.
          <br />
          So, My journey started with learning HTML, CSS and JavaScript and
          continues to learn NodeJS, ExpressJS, ReactJS and Mongodb like frameworks and
           libraries and is still learning new features of this tech 
           stack. In this journey I’ve acquired a diverse set of skills
            with various softwares and technologies.
        </div>
      </div>

      <div className="skills-container" style={backStyle}>
        <div className="heading head" style={{width : "85%", margin : "auto"}}>
          <img src="https://img.icons8.com/fluency/50/learning.png" alt="learning" className='skill-icon'/> My Skills
        </div>
        <div className="skills">
          <div className="heading">Frontend</div>
          <div className="innerskills">
            <div className="skill">
              <div className="skill-logo">
                <img src={html} alt="html-logo" className="skillimg" />
              </div>
              <div className="skillname">
                HTML5
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src={css} alt="css-logo" className="skillimg" />
              </div>
              <div className="skillname">
                CSS3
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src={javascript} alt="javascript-logo" className="skillimg" />
              </div>
              <div className="skillname">
                Javascript
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src={reactlogo} alt="react-logo" className="skillimg" />
              </div>
              <div className="skillname">
                ReactJS
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src={bootstrap} alt="bootstrap-logo" className="skillimg" />
              </div>
              <div className="skillname">
                Bootstrap
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src={tailwind} alt="tailwind-logo" className="skillimg" />
              </div>
              <div className="skillname">
                Tailwind CSS
              </div>
            </div>
          </div>

          <div className="heading">Backend</div>
          <div className="innerskills">
            <div className="skill">
            <div className="skill-logo">
                <img src={nodejs} alt="nodejs-logo" className="skillimg" />
              </div>
              <div className="skillname">
                Nodejs
              </div>
            </div>
            <div className="skill">
            <div className="skill-logo">
                <img src={express} alt="expressjs-logo" className="skillimg" />
              </div>
              <div className="skillname">
                Express.js
              </div>
            </div>
            <div className="skill">
            <div className="skill-logo">
                <img src={mongodb} alt="mongodb-logo" className="skillimg" />
              </div>
              <div className="skillname">
                MongoDB
              </div>
            </div>
            <div className="skill">
            <div className="skill-logo">
                <img src={mysql} alt="mysql-logo" className="skillimg" />
              </div>
              <div className="skillname">
                MySQL
              </div>
            </div>

          </div>
          
          <div className="heading">Testing</div>
          <div className="innerskills">
            <div className="skill">
            <div className="skill-logo">
                <img src={jest} alt="jest-logo" className="skillimg" />
              </div>
              <div className="skillname">
                Jest
              </div>
            </div>
          </div>

          <div className="heading">Hosting</div>
          <div className="innerskills">
            <div className="skill">
              <div className="skill-logo">
                <img src={render} alt="render-logo" className="skillimg" />
              </div>
              <div className="skillname">
                Render.com
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img className='skillimg' src="https://img.icons8.com/fluency/48/github.png" alt="github"/>
              </div>
              <div className="skillname">
                GitHub Pages
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src={netlify} alt="netlify-logo" className="skillimg" />
              </div>
              <div className="skillname">
                Netlify
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src={mongoatlas} alt="mongoatlas-logo" className="skillimg" />
              </div>
              <div className="skillname">
                Mongo Atlas
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="ach-container" style={backStyle}>
        <div className="heading head">
          <img className='skill-icon' src="https://img.icons8.com/color/50/first-place-ribbon.png" alt="first-place-ribbon"/> Achievements
        </div>
        <div className="achieves">
            <div className="ach" style={certStyle}>
              <img src={relevel} alt="Relevel Certificate" className="ach-img" />
              <div style={cert_titleStyle} className="ach-title">Full Stack Development 405 days training</div>
            </div>
            <div className="ach" style={certStyle}>
              <img src={phpc} alt="PHP Certificate" className="ach-img" />
              <div style={cert_titleStyle} className="ach-title">PHP with MySQL Development</div>
            </div>
            <div className="ach" style={certStyle}>
              <img src={jscert} alt="Javascript Certificate" className="ach-img" />
              <div style={cert_titleStyle} className="ach-title">Javascript Fundamentals</div>
            </div>
            <div className="ach" style={certStyle}>
              <img src={csscert} alt="CSS Certificate" className="ach-img" />
              <div style={cert_titleStyle} className="ach-title">CSS Fundamentals</div>
            </div>
        </div>
      </div>

      <div className="randomFacts">
        <div className="heading head">
          <img className='skill-icon' src="https://img.icons8.com/emoji/50/grinning-face-emoji.png" alt="grinning-face-emoji"/> Random facts about me
        </div>
        <div className="fact-cont">
          <div className="fact" style={{color : accColor}}>{randomFact}</div>
          <button style={btnStyle} onClick={generateRandomFact} className="shuffle">
            <i className="fa-solid fa-shuffle"></i> One more
          </button>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default AboutPage

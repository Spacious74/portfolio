import React, { useContext, useEffect, useState } from 'react'
import './About.css'
import facts from '../../facts'
import Footer from '../Footer/Footer'
import profilepic from '../../Resources/profile pic background less.png'
import ThemeContext from '../../themeContext'

import render from '../../Resources/skills/render.svg'

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
  const [randno, setRandno] = useState();

  useEffect(() => {
    generateRandomFact();
  }, []);

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandno(randomIndex);
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
        <img className='skill-icon' src="https://img.icons8.com/color/50/sparkling.png" alt="sparkling"/>&nbsp;
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
                <img src="https://img.icons8.com/color/40/html-5--v1.png" alt="html-5--v1"/>
              </div>
              <div className="skillname">
                HTML5
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
              <img src="https://img.icons8.com/color/40/css3.png" alt="css3"/>
              </div>
              <div className="skillname">
                CSS3
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
              <img src="https://img.icons8.com/color/40/javascript--v1.png" alt="javascript--v1"/>
              </div>
              <div className="skillname">
                Javascript
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src="https://img.icons8.com/officexs/40/react.png" alt="react"/>  
              </div>
              <div className="skillname">
                ReactJS
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src="https://img.icons8.com/color-glass/40/bootstrap.png" alt="bootstrap"/>
              </div>
              <div className="skillname">
                Bootstrap
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src="https://img.icons8.com/fluency/40/tailwind_css.png" alt="tailwind_css"/>
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
                <img src="https://img.icons8.com/color/40/nodejs.png" alt="nodejs"/>
              </div>
              <div className="skillname">
                Nodejs
              </div>
            </div>
            <div className="skill">
            <div className="skill-logo">
              <img src="https://img.icons8.com/color/40/express-js.png" alt="express-js"/>
              </div>
              <div className="skillname">
                Express.js
              </div>
            </div>
            <div className="skill">
            <div className="skill-logo">
              <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/40/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo"/>
              </div>
              <div className="skillname">
                MongoDB
              </div>
            </div>
            <div className="skill">
            <div className="skill-logo">
            <img src="https://img.icons8.com/fluency/40/mysql-logo.png" alt="mysql-logo"/>
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
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png" alt="jest logo"/>
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
              <img src="https://img.icons8.com/windows/40/github.png" alt="github"/>
              </div>
              <div className="skillname">
                GitHub Pages
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
                <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/40/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-green-tal-revivo.png" alt="netlify hosting"/>
              </div>
              <div className="skillname">
                Netlify
              </div>
            </div>
            <div className="skill">
              <div className="skill-logo">
              <img src="https://img.icons8.com/color/40/mongodb.png" alt="mongodb"/>
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
              <img src={"https://res.cloudinary.com/drrczbcx7/image/upload/v1695882597/Portfolio/relevel_certificate_dexp0c.jpg"} alt="Relevel Certificate" className="ach-img" />
              <div style={cert_titleStyle} className="ach-title">Full Stack Development 405 days training</div>
            </div>
            <div className="ach" style={certStyle}>
              <img src={"https://res.cloudinary.com/drrczbcx7/image/upload/v1695882596/Portfolio/PHP_certificate_xsrtxc.jpg"} alt="PHP Certificate" className="ach-img" />
              <div style={cert_titleStyle} className="ach-title">PHP with MySQL Development</div>
            </div>
            <div className="ach" style={certStyle}>
              <img src={"https://res.cloudinary.com/drrczbcx7/image/upload/v1695882599/Portfolio/javascript_certificate_owazsj.jpg"} alt="Javascript Certificate" className="ach-img" />
              <div style={cert_titleStyle} className="ach-title">Javascript Fundamentals</div>
            </div>
            <div className="ach" style={certStyle}>
              <img src={"https://res.cloudinary.com/drrczbcx7/image/upload/v1695882600/Portfolio/css_certificate_wyouq3.png"} alt="CSS Certificate" className="ach-img" />
              <div style={cert_titleStyle} className="ach-title">CSS Fundamentals</div>
            </div>
        </div>
      </div>

      <div className="randomFacts">
        <div className="heading head">
          <img className='skill-icon' src="https://img.icons8.com/emoji/50/grinning-face-emoji.png" alt="grinning-face-emoji"/> Random facts about me
        </div>
        <div className="fact-cont">
          <div className="fact" style={{color : accColor}}> <span
          style={{color : contextTheme.lightmode ? "#000" : "#fff", fontSize : "0.8rem"}}
          ># {randno+1}/{facts.length}</span> <br /> {randomFact}</div>
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

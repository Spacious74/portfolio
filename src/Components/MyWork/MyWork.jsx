import React, { useContext } from 'react'
import './MyWork.css'
import ThemeContext from '../../themeContext'
import show from '../../Resources/Web Projects/show box raw.png'
import shopping from '../../Resources/Web Projects/shopping bag raw.png'
import google from '../../Resources/Web Projects/google search clone raw.png'
import quizapp from '../../Resources/Web Projects/quiz app.png'
import iphone from '../../Resources/Web Projects/iPhone raw.png'
import wordpress from '../../Resources/Web Projects/wordpress raw.png'
import tictac from '../../Resources/Web Projects/tic tac toe.png'
import stone from '../../Resources/Web Projects/stone paper.png'
import spline from '../../Resources/Web Projects/spline raw.png'
import todo from '../../Resources/Web Projects/todo raw.png'

import Footer from '../Footer/Footer'

import { Link } from 'react-router-dom'



function MyWork() {

  const contextTheme = useContext(ThemeContext);
  const accColor = contextTheme.accColor;

  const backStyle  = {
    backgroundColor: contextTheme.lightmode ? "#fff" : "#26242C",
    color : contextTheme.lightmode ? "#000" : "#fff"
  }

  const projectInfoStyle = {
    color : accColor,
    border : "solid 1px" + accColor
  }

  return (
    <div className='workcontainer' style={backStyle}>
      <div className="mainheading head">My work</div>
      <div className="myWork">
        <div className="subheading" style={{color : accColor}}>Full Stack Projects</div>
        <div className="projects-container">
            {/* Show box */}
            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={show} alt="show box website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Show Box
                    <div className="pro-desc"
                    style={{color: accColor}}>MERN stack</div>
                </div>
                <div className="button-cont">
                    <Link  to = "https://show-box.netlify.app/"
                        className='procard-btn pro-active' target={"_blank"}
                        style={{backgroundColor : accColor}}>
                        <button className='inner-btn'>
                            Visit Project
                        </button>
                    </Link>
                    <Link  to = "/project-info/1"
                        className='procard-btn' style={projectInfoStyle}>
                        <button className='inner-btn' style={{color : accColor}}>
                            Project Info
                        </button>
                    </Link>
                </div>
            </div>

            {/* Shopping bag */}
            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={shopping} alt="show box website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Shopping Bag 
                    <div className="pro-desc"
                    style={{color: accColor}}>MERN stack</div>
                </div>
                <div className="button-cont">
                    <Link  to = "https://shopping-bag-dotcom.netlify.app/"
                        className='procard-btn pro-active' target={"_blank"}
                        style={{backgroundColor : accColor}}>
                        <button className='inner-btn'>
                            Visit Project
                        </button>
                    </Link>
                    <Link  to = "/project-info/2"
                        className='procard-btn' style={projectInfoStyle}>
                        <button className='inner-btn' style={{color : accColor}}>
                            Project Info
                        </button>
                    </Link>
                </div>
            </div>

        </div>
      </div>

      <div className="myWork">
        <div className="subheading" style={{color : accColor}}>React Frontend Projects</div>
        <div className="projects-container">
            {/* Google search clone */}
            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={google} alt="Google search clone website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Google Search Clone
                    <div className="pro-desc"
                    style={{color: accColor}}>React</div>
                </div>
                <div className="button-cont">
                <Link  to = "https://new-googles.netlify.app/"
                    className='procard-btn pro-active' target={"_blank"}
                    style={{backgroundColor : accColor}}>
                    <button className='inner-btn'>
                        Visit Project
                    </button>
                </Link>
                <Link  to = "/project-info/3"
                    className='procard-btn' style={projectInfoStyle}>
                    <button className='inner-btn' style={{color : accColor}}>
                        Project Info
                    </button>
                </Link>
                </div>
            </div>

            {/* Shopping bag */}
            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={quizapp} alt="Quiz website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Quiz App
                    <div className="pro-desc"
                    style={{color: accColor}}>React</div>
                </div>
                <div className="button-cont">
                <Link  to = "https://spacious74.github.io/Quiz-App/"
                    className='procard-btn pro-active' target={"_blank"}
                    style={{backgroundColor : accColor}}>
                    <button className='inner-btn'>
                        Visit Project
                    </button>
                </Link>
                <Link  to = "/project-info/4"
                    className='procard-btn' style={projectInfoStyle}>
                    <button className='inner-btn' style={{color : accColor}}>
                        Project Info
                    </button>
                </Link>
                </div>
            </div>

            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={iphone} alt="show box website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    iPhone14 webpage clone 
                    <div className="pro-desc"
                    style={{color: accColor}}>Reactjs UI</div>
                </div>
                <div className="button-cont">
                    <Link  to = "https://spacious74.github.io/iPhoneLandingPage/"
                        className='procard-btn pro-active' target={"_blank"}
                        style={{backgroundColor : accColor}}>
                        <button className='inner-btn'>
                            Visit Project
                        </button>
                    </Link>
                    <Link  to = "/project-info/5"
                        className='procard-btn' style={projectInfoStyle}>
                        <button className='inner-btn' style={{color : accColor}}>
                            Project Info
                        </button>
                    </Link>
                </div>
            </div>

            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={todo} alt="Todo website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Todo Application
                    <div className="pro-desc"
                    style={{color: accColor}}>ReactJS</div>
                </div>
                <div className="button-cont">
                    <Link  to = "https://spacious74.github.io/ToDoUI/"
                        className='procard-btn pro-active' target={"_blank"}
                        style={{backgroundColor : accColor}}>
                        <button className='inner-btn'>
                            Visit Project
                        </button>
                    </Link>
                    <Link  to = "/project-info/6"
                        className='procard-btn' style={projectInfoStyle}>
                        <button className='inner-btn' style={{color : accColor}}>
                            Project Info
                        </button>
                    </Link>
                </div>
            </div>

        </div>
      </div>

      <div className="myWork">
        <div className="subheading" style={{color : accColor}}>Wordpress website</div>
        <div className="projects-container">
            {/* Show box */}
            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={wordpress} alt="Wordpress website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Codiology
                    <div className="pro-desc"
                    style={{color: accColor}}>Wordpress</div>
                </div>
                <div className="button-cont">
                    <Link  to = "https://a1codiology.wordpress.com/"
                        className='procard-btn pro-active' target={"_blank"}
                        style={{backgroundColor : accColor}}>
                        <button className='inner-btn'>
                            Visit Project
                        </button>
                    </Link>
                    <Link  to = "/project-info/10"
                        className='procard-btn' style={projectInfoStyle}>
                        <button className='inner-btn' style={{color : accColor}}>
                            Project Info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </div>

      <div className="myWork">
        <div className="subheading" style={{color : accColor}}>React games</div>
        <div className="projects-container">
            {/* Show box */}
            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={stone} alt="Stone Paper website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Stone Paper Scissor
                    <div className="pro-desc"
                    style={{color: accColor}}>React</div>
                </div>
                <div className="button-cont">
                    <Link  to = "https://spacious74.github.io/stone-paper-scissor/"
                        className='procard-btn pro-active' target={"_blank"}
                        style={{backgroundColor : accColor}}>
                        <button className='inner-btn'>
                            Visit Project
                        </button>
                    </Link>
                    <Link  to = "/project-info/7"
                        className='procard-btn' style={projectInfoStyle}>
                        <button className='inner-btn' style={{color : accColor}}>
                            Project Info
                        </button>
                    </Link>
                </div>
            </div>
            {/* Show box */}
            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={tictac} alt="Tic tac toe website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Tic Tac Toe
                    <div className="pro-desc"
                    style={{color: accColor}}>React</div>
                </div>
                <div className="button-cont">
                    <Link  to = "https://spacious74.github.io/Tic-Tac-Toe/"
                        className='procard-btn pro-active' target={"_blank"}
                        style={{backgroundColor : accColor}}>
                        <button className='inner-btn'>
                            Visit Project
                        </button>
                    </Link>
                    <Link  to = "/project-info/8"
                        className='procard-btn' style={projectInfoStyle}>
                        <button className='inner-btn' style={{color : accColor}}>
                            Project Info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </div>

      
      <div className="myWork">
        <div className="subheading" style={{color : accColor}}>Web Graphics Designing</div>
        <div className="projects-container">
            {/* Show box */}
            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={spline} alt="show box website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Spline 3d graphics 
                    <div className="pro-desc"
                    style={{color: accColor}}>Graphics designing</div>
                </div>
                <div className="button-cont">
                    <Link  to = "https://spacious74.github.io/spline-3d-graphics/"
                        className='procard-btn pro-active' target={"_blank"}
                        style={{backgroundColor : accColor}}>
                        <button className='inner-btn'>
                            Visit Project
                        </button>
                    </Link>
                    <Link  to = "/project-info/9"
                        className='procard-btn' style={projectInfoStyle}>
                        <button className='inner-btn' style={{color : accColor}}>
                            Project Info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MyWork

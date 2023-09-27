import React, { useContext } from 'react'
import './HMyWork.css'
import show from '../../Resources/Web Projects/show box raw.png'
import shopping from '../../Resources/Web Projects/shopping bag raw.png'
import wordpress from '../../Resources/Web Projects/wordpress raw.png'
import iphone from '../../Resources/Web Projects/iPhone raw.png'
import spline from '../../Resources/Web Projects/spline raw.png'
import { Link } from 'react-router-dom'

import ThemeContext from '../../themeContext'

function HMyWork() {


    const contextTheme = useContext(ThemeContext);
    const accColor = contextTheme.accColor;

    const backStyle  = {
        backgroundColor: contextTheme.lightmode ? "#f3f3f3" : "#26242C",
        color : contextTheme.lightmode ? "#000" : "#fff",
        borderColor : accColor
    }

  return (
    <div className='hmywork-container'>
      <div className="myWork">
        <div className="heading">My Work</div>
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
                <button className='procard-btn'
                    style={backStyle}>Project Info</button>
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
                    <button className='procard-btn'
                    style={backStyle}>Project Info</button>
                </div>
            </div>

            {/* IPhone clone */}
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
                    <button className='procard-btn'
                    style={backStyle}>Project Info</button>
                </div>
            </div>

            {/* Wordpress website */}
            <div className="projects" style={backStyle}>
                <div className="project-image">
                    <img src={wordpress} alt="show box website screenshot" className='pro-img' />
                </div>
                <div className="project-name">
                    Programming Languages tutorial website 
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
                    <button className='procard-btn'
                    style={backStyle}>Project Info</button>
                </div>
            </div>

            {/* Spline */}
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
                    <button className='procard-btn'
                    style={backStyle}>Project Info</button>
                </div>
            </div>
        </div>
        <div className="btn-container fxcn">
            <Link to="/mywork">
                <button className="more-btn" style={backStyle}>View more...</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HMyWork

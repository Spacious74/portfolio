import React, { useContext, useState } from 'react'
import './Navbar.css'
import DarkLightMode from '../DarkLight/DarkLightMode'
import { NavLink, Link } from 'react-router-dom'
import ThemeContext from '../../themeContext'
import {motion, useScroll} from 'framer-motion'

const Navbar = ()=> {


    const contextTheme = useContext(ThemeContext);
    const accColor = contextTheme.accColor;

    const backStyle  = {
        backgroundColor: contextTheme.lightmode ? "#f1f0f3" : "#17161d",
        color : contextTheme.lightmode ? "#000" : "#fff",
        borderColor : accColor
    }

    const [hamClick, setHamClick] = useState(false)

    const hl1Style = {
        backgroundColor: contextTheme.lightmode ? "#000" : "#fff",
        transform : hamClick ? "rotate(45deg) translate(6px,7px)" : "rotate(0deg) translateY(0px)"
    }
    const hl2Style = {
        backgroundColor: contextTheme.lightmode ? "#000" : "#fff",
        opacity : hamClick ? "0" : "1"
    }
    const hl3Style = {
        backgroundColor: contextTheme.lightmode ? "#000" : "#fff",
        transform : hamClick ? "rotate(-45deg) translate(6px,-7px)" : "rotate(0deg) translateY(0px)"
    }

    const navStyle = {
        backgroundColor: contextTheme.lightmode ? "#f1f0f3" : "#17161d",
        transform : hamClick ? "translateY(0px)" : "translateY(-800px)"
    }
    const { scrollYProgress } = useScroll();

  return (
    <div className='nav-container' style={backStyle}>
      <nav className="navbar fxcn">
        <div className="left">
            <Link to="/" >
                <div style={backStyle} className="logo fxcn">VS.</div>
            </Link>
        </div>
        <div className="right fxcn" >

            <NavLink to={"/"} className={({ isActive, isPending }) =>
                isActive ? "navitems underline active" : "navitems underline"
            } style={({ isActive, isPending }) => {
                return {
                    color : isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                    backgroundColor : isActive ? accColor : "",
                    backgroundImage : `linear-gradient(90deg, ${accColor}, ${accColor})`
                }
            }}>
                Home
            </NavLink>

            <NavLink to={"/mywork"} className={({ isActive, isPending }) =>
                isActive ? "navitems underline active" : "navitems underline"
            } style={({ isActive, isPending }) => {
                return {
                    color : isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                    backgroundColor : isActive ? accColor : "",
                    backgroundImage : `linear-gradient(90deg, ${accColor}, ${accColor})`
                }
            }}>
               My Work
            </NavLink>

            <NavLink to={"/aboutme"} className={({ isActive, isPending }) =>
                isActive ? "navitems underline active" : "navitems underline"
            } style={({ isActive, isPending }) => {
                return {
                    color : isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                    backgroundColor : isActive ? accColor : "",
                    backgroundImage : `linear-gradient(90deg, ${accColor}, ${accColor})`
                }
            }}>
               About me
            </NavLink>

            <Link style={
                {
                    backgroundColor: contextTheme.lightmode ? "#f1f0f3" : "#17161d",
                    color : contextTheme.lightmode ? "#000" : "#fff",
                    backgroundImage : `linear-gradient(90deg, ${accColor}, ${accColor})`
                }
            } to="https://drive.google.com/file/d/1NYObp_b6k8KmwrjPJQkMM7v4YIYIbTDb/view?usp=drive_link" 
            className="navitems underline" target={"_blank"}>
                My resume
            </Link >
            <span className="navitems colorDropdown" style={{backgroundColor: accColor}}>
            </span>
            <div className="dropdownItems">
                <span className="colorDropdown" 
                style={{backgroundColor: "#9d75c3"}} 
                onClick={()=>{contextTheme.setAccColor("#9d75c3")}} ></span>
                <span className="colorDropdown" 
                style={{backgroundColor: "#d8ba57"}} 
                onClick={()=>{contextTheme.setAccColor("#d8ba57")}} ></span>
                <span className="colorDropdown" 
                style={{backgroundColor: "#5784d8"}} 
                onClick={()=>{contextTheme.setAccColor("#5784d8")}} ></span>
                <span className="colorDropdown" 
                style={{backgroundColor: "#57c257"}} 
                onClick={()=>{contextTheme.setAccColor("#57c257")}} ></span>
                <span className="colorDropdown" 
                style={{backgroundColor: "#d85757"}} 
                onClick={()=>{contextTheme.setAccColor("#d85757")}} ></span>
            </div>
            <span className="navitems">
                <DarkLightMode />
            </span>
        </div>
        <div className="responsive-nav">
        <span className="resToggler">
        <span className="navitems colorDropdown" style={{backgroundColor: accColor}}>
            </span>
            <div className="dropdownItems">
                <span className="colorDropdown" 
                style={{backgroundColor: "#9d75c3"}} 
                onClick={()=>{contextTheme.setAccColor("#9d75c3")}} ></span>
                <span className="colorDropdown" 
                style={{backgroundColor: "#d8ba57"}} 
                onClick={()=>{contextTheme.setAccColor("#d8ba57")}} ></span>
                <span className="colorDropdown" 
                style={{backgroundColor: "#5784d8"}} 
                onClick={()=>{contextTheme.setAccColor("#5784d8")}} ></span>
                <span className="colorDropdown" 
                style={{backgroundColor: "#57c257"}} 
                onClick={()=>{contextTheme.setAccColor("#57c257")}} ></span>
                <span className="colorDropdown" 
                style={{backgroundColor: "#d85757"}} 
                onClick={()=>{contextTheme.setAccColor("#d85757")}} ></span>
            </div>
            <DarkLightMode />
        </span>
        <div className="hamBurger" onClick={()=>{setHamClick(!hamClick)}}>
            <span className="hamLines hl1" style={hl1Style} ></span>
            <span className="hamLines hl2" style={hl2Style} ></span>
            <span className="hamLines hl3" style={hl3Style} ></span>
        </div>
        </div>
      </nav>
        <motion.div style={{ 
            scaleX: scrollYProgress, 
            backgroundColor : accColor, 
            height : "2px",
            zIndex: 90,
            transformOrigin: "0%"
        }}></motion.div>  


      <nav className="res-nav-link-cont" style={navStyle}>
            <NavLink onClick={()=>{setHamClick(!hamClick)}} to={"/"} className={({ isActive, isPending }) =>
                isActive ? "navitems underline active" : "navitems underline"
            } style={({ isActive, isPending }) => {
                return {
                    color : isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                    backgroundColor : isActive ? accColor : "",
                    backgroundImage : `linear-gradient(90deg, ${accColor}, ${accColor})`
                }
            }}>
                Home
            </NavLink>

            <NavLink onClick={()=>{setHamClick(!hamClick)}} to={"/mywork"} className={({ isActive, isPending }) =>
                isActive ? "navitems underline active" : "navitems underline"
            } style={({ isActive, isPending }) => {
                return {
                    color : isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                    backgroundColor : isActive ? accColor : "",
                    backgroundImage : `linear-gradient(90deg, ${accColor}, ${accColor})`
                }
            }}>
               My Work
            </NavLink>

            <NavLink onClick={()=>{setHamClick(!hamClick)}} to={"/aboutme"} className={({ isActive, isPending }) =>
                isActive ? "navitems underline active" : "navitems underline"
            } style={({ isActive, isPending }) => {
                return {
                    color : isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                    backgroundColor : isActive ? accColor : "",
                    backgroundImage : `linear-gradient(90deg, ${accColor}, ${accColor})`
                }
            }}>
               About me
            </NavLink>

            <Link onClick={()=>{setHamClick(!hamClick)}} style={
                {
                    backgroundColor: contextTheme.lightmode ? "#f1f0f3" : "#17161d",
                    color : contextTheme.lightmode ? "#000" : "#fff",
                    backgroundImage : `linear-gradient(90deg, ${accColor}, ${accColor})`
                }
            } to="https://drive.google.com/file/d/1NYObp_b6k8KmwrjPJQkMM7v4YIYIbTDb/view?usp=drive_link" 
            className="navitems underline" target={"_blank"}>
                My resume
            </Link >
      </nav>
    </div>
  )
}

export default Navbar

import React, { useContext, useState } from 'react';
import './Navbar.css';
import DarkLightMode from '../DarkLight/DarkLightMode';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ThemeContext from '../../themeContext';

const Navbar = () => {


    const contextTheme = useContext(ThemeContext);
    const accColor = contextTheme.accColor;
    const location = useLocation();

    const backStyle = {
        backgroundColor: contextTheme.lightmode ? "#f1f0f3" : "#17161d",
        color: contextTheme.lightmode ? "#000" : "#fff",
        borderColor: accColor
    }

    const [hamClick, setHamClick] = useState(false)

    // const hl1Style = {
    //     backgroundColor: contextTheme.lightmode ? "#000" : "#fff",
    //     transform : hamClick ? "rotate(45deg) translate(6px,7px)" : "rotate(0deg) translateY(0px)"
    // }
    // const hl2Style = {
    //     backgroundColor: contextTheme.lightmode ? "#000" : "#fff",
    //     opacity : hamClick ? "0" : "1"
    // }
    // const hl3Style = {
    //     backgroundColor: contextTheme.lightmode ? "#000" : "#fff",
    //     transform : hamClick ? "rotate(-45deg) translate(6px,-7px)" : "rotate(0deg) translateY(0px)"
    // }

    const navStyle = {
        backgroundColor: contextTheme.lightmode ? "#f1f0f3" : "#17161d",
        // transform : hamClick ? "translateY(0px)" : "translateY(-800px)"
    }

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
                            color: isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                            backgroundColor: isActive ? accColor : "",
                            backgroundImage: `linear-gradient(90deg, ${accColor}, ${accColor})`
                        }
                    }}>
                        Home
                    </NavLink>

                    <NavLink to={"/mywork"} className={({ isActive, isPending }) =>
                        isActive ? "navitems underline active" : "navitems underline"
                    } style={({ isActive, isPending }) => {
                        return {
                            color: isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                            backgroundColor: isActive ? accColor : "",
                            backgroundImage: `linear-gradient(90deg, ${accColor}, ${accColor})`
                        }
                    }}>
                        My Work
                    </NavLink>

                    <NavLink to={"/aboutme"} className={({ isActive, isPending }) =>
                        isActive ? "navitems underline active" : "navitems underline"
                    } style={({ isActive, isPending }) => {
                        return {
                            color: isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                            backgroundColor: isActive ? accColor : "",
                            backgroundImage: `linear-gradient(90deg, ${accColor}, ${accColor})`
                        }
                    }}>
                        About me
                    </NavLink>

                    <Link style={
                        {
                            backgroundColor: contextTheme.lightmode ? "#f1f0f3" : "#17161d",
                            color: contextTheme.lightmode ? "#000" : "#fff",
                            backgroundImage: `linear-gradient(90deg, ${accColor}, ${accColor})`
                        }
                    } to="https://drive.google.com/file/d/1fOVgnyb3cxt9ENSNwi9IqRWx6BGan4zx/view?usp=sharing"
                        className="navitems underline" target={"_blank"}>
                        My resume
                    </Link >

                    <span className="navitems colorDropdown" style={{ backgroundColor: accColor, color: '#fff' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M10 4.499v-2.5H5.5a.5.5 0 0 0-.5.5v6.5h10V2.5a.5.5 0 0 0-.5-.5H13v3.502a.5.5 0 0 1-1 0V2h-1v2.5a.5.5 0 0 1-1 0m5 5.5H5v1.004a2 2 0 0 0 2 2h1.5v3.498a1.5 1.5 0 1 0 3 0v-3.498H13a2 2 0 0 0 2-2z" /></svg>
                    </span>

                    <div className="dropdownItems">
                        <span className="colorDropdown"
                            style={{ backgroundColor: "#8424dd" }}
                            onClick={() => { contextTheme.setAccColor("#8424dd") }} >
                        </span>
                        <span className="colorDropdown"
                            style={{ backgroundColor: "#d8ba57" }}
                            onClick={() => { contextTheme.setAccColor("#d8ba57") }} ></span>
                        <span className="colorDropdown"
                            style={{ backgroundColor: "#5784d8" }}
                            onClick={() => { contextTheme.setAccColor("#5784d8") }} ></span>
                        <span className="colorDropdown"
                            style={{ backgroundColor: "#57c257" }}
                            onClick={() => { contextTheme.setAccColor("#57c257") }} ></span>
                        <span className="colorDropdown"
                            style={{ backgroundColor: "#d85757" }}
                            onClick={() => { contextTheme.setAccColor("#d85757") }} ></span>
                    </div>

                    <span className="navitems">
                        <DarkLightMode />
                    </span>

                </div>

                <div className="responsive-nav">
                    <span className="resToggler">
                        <span className="navitems colorDropdown" style={{ backgroundColor: accColor, color : '#fff' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M10 4.499v-2.5H5.5a.5.5 0 0 0-.5.5v6.5h10V2.5a.5.5 0 0 0-.5-.5H13v3.502a.5.5 0 0 1-1 0V2h-1v2.5a.5.5 0 0 1-1 0m5 5.5H5v1.004a2 2 0 0 0 2 2h1.5v3.498a1.5 1.5 0 1 0 3 0v-3.498H13a2 2 0 0 0 2-2z" /></svg>
                        </span>
                        <div className="dropdownItems">
                            <span className="colorDropdown"
                                style={{ backgroundColor: "#9d75c3" }}
                                onClick={() => { contextTheme.setAccColor("#9d75c3") }} ></span>
                            <span className="colorDropdown"
                                style={{ backgroundColor: "#d8ba57" }}
                                onClick={() => { contextTheme.setAccColor("#d8ba57") }} ></span>
                            <span className="colorDropdown"
                                style={{ backgroundColor: "#5784d8" }}
                                onClick={() => { contextTheme.setAccColor("#5784d8") }} ></span>
                            <span className="colorDropdown"
                                style={{ backgroundColor: "#57c257" }}
                                onClick={() => { contextTheme.setAccColor("#57c257") }} ></span>
                            <span className="colorDropdown"
                                style={{ backgroundColor: "#d85757" }}
                                onClick={() => { contextTheme.setAccColor("#d85757") }} ></span>
                        </div>
                        <DarkLightMode />
                    </span>
                </div>
            </nav>

            <nav className="res-nav-link-cont" style={navStyle}>
                <NavLink onClick={() => { setHamClick(!hamClick) }} to={"/"} className={({ isActive, isPending }) =>
                    isActive ? "navitems underline active" : "navitems underline"
                } style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                        backgroundColor: isActive ? accColor : "",
                        backgroundImage: `linear-gradient(90deg, ${accColor}, ${accColor})`,
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18h4M2.351 13.214c-.353-2.298-.53-3.446-.095-4.465c.434-1.018 1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12 2s2.582.867 4.979 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108c.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856s-2.875.971-6.29.971H10.86c-3.415 0-5.122 0-6.29-.971c-1.168-.972-1.418-2.6-1.919-5.857z" color="currentColor"/></svg>
                    {location.pathname === '/' && (
                        <span>Home</span>
                    )}
                </NavLink>

                <NavLink onClick={() => { setHamClick(!hamClick) }} to={"/mywork"} className={({ isActive, isPending }) =>
                    isActive ? "navitems underline active" : "navitems underline"
                } style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                        backgroundColor: isActive ? accColor : "",
                        backgroundImage: `linear-gradient(90deg, ${accColor}, ${accColor})`,
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.647 15.536H4.353m15.294 0V8c0-1.886 0-2.828-.586-3.414C18.476 4 17.533 4 15.647 4H8.353c-1.886 0-2.828 0-3.414.586S4.353 6.114 4.353 8v7.536m15.294 0l1.744 1.8l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 19.063 2 18.988 2 18.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092l1.744-1.8M9.5 18.5h5"/><path fill="currentColor" d="M12.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/></g></svg>
                    {location.pathname === '/mywork' && (
                        <span>My Work</span>
                    )}
                </NavLink>

                <NavLink onClick={() => { setHamClick(!hamClick) }} to={"/aboutme"} className={({ isActive, isPending }) =>
                    isActive ? "navitems underline active" : "navitems underline"
                } style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#fff" : contextTheme.lightmode ? "#000" : "#fff",
                        backgroundColor: isActive ? accColor : "",
                        backgroundImage: `linear-gradient(90deg, ${accColor}, ${accColor})`,
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5"/></g></svg>
                    {location.pathname === '/aboutme' && (
                        <span>About me</span>
                    )}
                </NavLink>

                <Link onClick={() => { setHamClick(!hamClick) }} style={
                    {
                        color: contextTheme.lightmode ? "#000" : "#fff",
                    }
                } to="https://drive.google.com/file/d/1fOVgnyb3cxt9ENSNwi9IqRWx6BGan4zx/view?usp=sharing"
                    className="navitems underline" target={"_blank"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" color="currentColor"><path d="M15 2.5V4c0 1.414 0 2.121.44 2.56C15.878 7 16.585 7 18 7h1.5"/><path d="M4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4.172c.408 0 .613 0 .797.076c.183.076.328.22.617.51l3.828 3.828c.29.29.434.434.51.618c.076.183.076.388.076.796V16c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16m4-5h8m-8 3h8m-8 3h4.17"/></g></svg>
                    {location.pathname === '/resume' && (
                        <span>Resume</span>
                    )}
                </Link >
            </nav>
        </div>
    )
}

export default Navbar

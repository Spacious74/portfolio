import React, { useContext } from 'react'
import ThemeContext from '../../themeContext'
import './DarkLightMode.css'


function DarkLightMode() {

    const contextTheme = useContext(ThemeContext);
    const accColor = contextTheme.accColor;

    const containerStyle = {
        backgroundColor : contextTheme.lightmode ?  "#ffffff" : accColor,
    }
    
    const circleStyle = {
        backgroundColor : contextTheme.lightmode ?  accColor : "#ffffff",
        left : contextTheme.lightmode ? "3px" : "40px",
    }

    const handleLightMode = ()=>{
        contextTheme.setLightMode(!contextTheme.lightmode)
    }

  return (
    <div className="container" id="cont" style={containerStyle}>
        <button style={circleStyle}
         className="circle" id="circle" onClick={handleLightMode}>
        </button>
    </div>
  )
}

export default DarkLightMode

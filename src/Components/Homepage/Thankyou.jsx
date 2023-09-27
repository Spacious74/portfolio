import React, { useContext } from 'react'
import thankgif from '../../Resources/Add a subheading.png' 
import './Thankyou.css'
import { Link } from 'react-router-dom'
import ThemeContext from '../../themeContext'
function Thankyou() {

  const contextTheme = useContext(ThemeContext);
  const accColor = contextTheme.accColor;

  return (
    <div className='thankcontainer fxcn'>
      <img src={thankgif} alt="gif" />  
      <div className="thank-text">🙏🏻 I'll be reaching you so soon. 😄</div>
      <Link to="/" 
      style={{
        color : "#fff",
        backgroundColor : accColor,
        border : "solid 2px #000",
        padding : "5px 15px",
        borderRadius : "100px"
      }}>
        <i className="fa-solid fa-arrow-left-long"></i>&nbsp; Go back to the site
      </Link>
    </div>
  )
}

export default Thankyou

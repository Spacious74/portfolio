import React, { useContext } from 'react'
import './Contact.css'
import ThemeContext from '../../themeContext'


function Contact() {

  const contextTheme = useContext(ThemeContext);
  const accColor = contextTheme.accColor;
  

  const backStyle  = {
    backgroundColor: contextTheme.lightmode ? "#fff" : "#26242C",
    color : contextTheme.lightmode ? "#000" : "#fff",
    borderColor : "#808080"
  }


  return (
    <div className="contact-cont">
      <div className="heading">Contact me</div>
      <div className="formandimg">
        <form className="contactForm" action="https://formsubmit.co/vishalsavita809018@gmail.com" method="POST">

          <div className="input-field">
            <label htmlFor="name" style={{color : accColor}}>Name</label>
            <input type="text" name="name" id="name"  style={backStyle} />
          </div>

          <div className="input-field">
            <label htmlFor="email" style={{color : accColor}}>Your email</label>
            <input type="email" name="email" id="email"  style={backStyle} />
          </div>

          <div className="input-field">
            <label htmlFor="message" style={{color : accColor}}>Message</label>
            <textarea  name="message" style={backStyle}  id="message" 
            cols="30" rows="5"></textarea>
          </div>
          <input type="hidden" name="_next" value="http://localhost:3000/form-submitted" />
          <input type="hidden" name="_captcha" value="false" />
          <button className="mainbtn" 
          style={{marginTop : "0px", backgroundColor : accColor}}
          >Send <i className='fa-solid fa-paper-plane'></i></button>
        </form>
        <div className="img-cont"
        style={{backgroundImage : `radial-gradient( ellipse farthest-corner at 10px 10px , ${accColor}, ${accColor} 50%, transparent 50%)`}}
        >
        </div>
      </div>
    </div>
  )
}

export default Contact

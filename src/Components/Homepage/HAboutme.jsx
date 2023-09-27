import React, { useContext } from 'react'
// import profilepic from '../../Resources/profile back window.png'
import './HAboutme.css'
import ThemeContext from '../../themeContext';
import { Link } from 'react-router-dom';

function HAboutme() {

  const contextTheme = useContext(ThemeContext);
  const accColor = contextTheme.accColor;

  return (
     <div className='aboutSection fxcn' >
        <div className="resHead ">About me</div>
     <div className="abbouttext">
       <div className="smtxt">
         <div className="heading">About me</div>
         <p><img className='icons' src="https://img.icons8.com/office/25/000000/so-so.png" alt="Waving hand icon "/> Hello and Welcome to my portfolio, 
           My name is Vishal Savita and 
           I'm specializing <span className="btext">
             <span style={{color : "#00EC65"}}>M</span>
             <span>E</span>
             <span style={{color : "#159ECB"}}>R</span>
             <span style={{color : "#5BAB46"}}>N</span>
             </span> stack developement.</p>
             <p>From my early college days, I've been 
               fascinated by the GUI of Web Apps,
               Android OS and iOS design language and always have a desire to customize some
               elements in my style but it is only possible after learning a stack.
             </p>
             <p>So, My journey started with learning HTML, CSS and JavaScript and continues to learn NodeJS, ExpressJS, ReactJS and Mongodb
               like frameworks and libraries and is still learning new features of this tech stack.
               In this journey I’ve acquired a diverse set of skills with various softwares and technologies.
             </p>
             <div className="fxcn btnPara" >
              <Link to="/aboutme">
               <button className="mainbtn"
               style={{
                backgroundColor: accColor
              }}>
               <i className="fa-solid fa-route"></i>&nbsp;
                Explore my journey</button>
              </Link>
               <p style={{marginBottom : "0px"}}>See, What can I serve you ?</p>
             </div>
       </div>
     </div>
   </div>
   
  )
}

export default HAboutme

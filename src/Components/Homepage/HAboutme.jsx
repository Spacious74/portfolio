import React, { useContext } from "react";
import "./HAboutme.css";
import ThemeContext from "../../themeContext";
import { Link } from "react-router-dom";

function HAboutme() {
  const contextTheme = useContext(ThemeContext);
  const accColor = contextTheme.accColor;

  return (
    <div className="aboutSection fxcn">
      <div className="resHead">About me</div>
      <div className="abbouttext">
        <div className="smtxt">
          <div className="heading">The Developer Behind the Code</div>
          <p>
            I'm Vishal Savita, a Full-Stack Developer skilled in MERN & MEAN stacks, specializing in UI/UX optimization, API integrations, and scalable web solutions. <b style={{color : accColor}}>  I currently work as a Jr. Software Developer at E-Mentors Technologies,  </b>enhancing frontend experiences and building efficient backend systems.
          </p>
          <p>
            With expertise in Angular, React.js, Node.js, and MySQL, I focus on creating high-performance applications that deliver seamless user experiences. My work includes optimizing performance, integrating APIs, and developing responsive web interfaces.
          </p>
          <p>
            Passionate about emerging technologies and problem-solving, I love exploring new tools and best practices to build innovative and scalable web applications. Let’s collaborate and create something amazing! 🚀
          </p>

          <div className="fxcn btnPara">
            <Link to="/aboutme" className="btnContainer fxcn">
              <button
                className="mainbtn"
                style={{
                  backgroundColor: accColor,
                  marginTop: '10px'
                }}
              >
                <i className="fa-solid fa-route"></i>&nbsp; Explore my journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HAboutme;

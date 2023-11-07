import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import projectInfoArr from '../../projectInfo'
import { Link } from 'react-router-dom';
import './ProjectInfo.css'
import Footer from '../Footer/Footer';

import showbox from '../../Resources/Web Projects/show box edited.png';
import shoppingbag from '../../Resources/Web Projects/shopping bag edited.png';
import googleclone from '../../Resources/Web Projects/google search clone edited.png';
import quizapp from '../../Resources/Web Projects/quiz app edited.png';
import iphone from '../../Resources/Web Projects/iPhone edited.png';
import todo from '../../Resources/Web Projects/todo edited.png'
import stonepaper from '../../Resources/Web Projects/stone paper edited.png'
import tictac from '../../Resources/Web Projects/tic tac edited.png';
import spline from '../../Resources/Web Projects/spline.png'
import wordpress from '../../Resources/Web Projects/wordpress edited.png'
import type from '../../Resources/Web Projects/protype mockup.png'
import ThemeContext from '../../themeContext'
import {motion} from 'framer-motion'
const imgArr = [showbox, shoppingbag, googleclone, quizapp , iphone, todo, stonepaper, tictac, spline, wordpress, type];


function ProjectInfo() {
    
    const [project, setProject] = useState({});
    const [proImg, setProImg] = useState();
    const contextTheme = useContext(ThemeContext);
    const accColor = contextTheme.accColor;
  
    const backStyle  = {
      backgroundColor: contextTheme.lightmode ? "#fff" : "#26242C",
      color : contextTheme.lightmode ? "#000" : "#fff",
      borderColor : "#808080"
    }
    let {pindex} = useParams();

    useEffect(()=>{

        setProject(projectInfoArr[pindex-1]);
        setProImg(imgArr[pindex-1]);

    },[pindex, project]);   
    
    


  return (
    <div className='projectInfo-container' style={backStyle}>
        <div className="projectInfo">
            <div className="projectInfoImgCont">

                <motion.img 
                initial={{ opacity: 0, transform : "translateX(-140px)" }}
                whileInView={{ opacity: 1, transform : "translateX(0px)" }}
                transition={{ duration : 0.5 }}
                viewport={{ once: true, amount: 0 }}
                src={proImg} alt={project.siteName} />

                <Link to={project.projectLink} target={"_blank"} className="btncont">
                    <motion.button
                    initial={{ opacity: 0, transform : "translateX(-140px)" }}
                    whileInView={{ opacity: 1, transform : "translateX(0px)" }}
                    transition={{ duration : 0.5, delay : 0.2}}
                    viewport={{ once: true, amount: 0.8 }}
                    className='visitBtn' style={{backgroundColor : accColor}}>Visit Project&nbsp; <i className="fa-solid fa-paper-plane"></i></motion.button>
                </Link>

            </div>
            <div className="projectInfoText">
                <motion.div 
                initial={{ opacity: 0, transform : "translateY(100px)" }}
                whileInView={{ opacity: 1, transform : "translateY(0px)" }}
                transition={{ duration : 0.5 }}
                viewport={{ once: true, amount: 0.8 }}
                className="siteName">{project.siteName}</motion.div>
                <motion.div 
                initial={{ opacity: 0, transform : "translateY(100px)" }}
                whileInView={{ opacity: 1, transform : "translateY(0px)" }}
                transition={{ duration : 0.5, delay : 0.1 }}
                viewport={{ once: true, amount: 0.8 }}
                className="techStack">
                    <span className="proptitle" style={{color : accColor}}><i className="fa-solid fa-layer-group tech-icon"></i>&nbsp; Tech Stack</span> - {
                        project.techStack && project.techStack.map((pro, ind) => {
                            return <div key={ind} className='techText'>{pro},</div>
                        })
                    }
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, transform : "translateY(100px)" }}
                whileInView={{ opacity: 1, transform : "translateY(0px)" }}
                transition={{ duration : 0.5, delay : 0.2 }}
                viewport={{ once: true, amount: 0.8 }}
                className="duration">
                <span className="proptitle" style={{color : accColor}}><i className="fa-solid fa-clock tech-icon"></i>&nbsp; Duration</span> - {project.duration}
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, transform : "translateY(100px)" }}
                whileInView={{ opacity: 1, transform : "translateY(0px)" }}
                transition={{ duration : 0.5, delay : 0.3 }}
                viewport={{ once: true, amount: 0.8 }}
                className="gitHubLink" style={{color : accColor}}>
                    <span className="proptitle"><i className="fa-solid fa-code tech-icon"></i>&nbsp; Project Code</span> - &nbsp;
                    <Link className='gitLink' to={project.code} target={"_blank"}>
                        Visit Github Link
                    </Link>
                </motion.div>
            </div>
        </div>
        { (project.learnings) && <div className="projectDetailsCont">
            <div className="heading">
            <img className='icons' src="https://img.icons8.com/color/48/reading.png" alt="reading"/> Learning from this project
            </div>
            <div className="learnings">
                {
                    project.learnings && project.learnings.map((l,ind)=>{
                        return <motion.div 
                        initial={{ opacity: 0, transform : "translateY(140px)" }}
                        whileInView={{ opacity: 1, transform : "translateY(0px)" }}
                        transition={{ duration : 0.5, }}
                        viewport={{ once: true, amount: 0.8 }}
                        key={ind} className="learnText">
                            <i className="fa-solid fa-circle-check" 
                            style={{color : "#5bbd42", width : "20px"}}></i> {l}
                        </motion.div>
                    })
                }
            </div>
        </div>}
        { (project.challenges) && <div className="projectDetailsCont">
            <motion.div 
            initial={{ opacity: 0, transform : "translateY(140px)" }}
            whileInView={{ opacity: 1, transform : "translateY(0px)" }}
            transition={{ duration : 0.5}}
            viewport={{ once: true, amount: 0.8 }}
            className="heading">
                <img className='icons' src="https://img.icons8.com/color/48/climber.png" alt="climber"/> Challenges faced in this project
            </motion.div>
            <div className="learnings">
                {
                    project.challenges && project.challenges.map((c,ind)=>{
                        return <motion.div 
                        initial={{ opacity: 0, transform : "translateY(140px)" }}
                        whileInView={{ opacity: 1, transform : "translateY(0px)" }}
                        transition={{ duration : 0.5}}
                        viewport={{ once: true, amount: 0.8 }}
                        key={ind} className="learnText">
                           <i className="fa-solid fa-fire-flame-curved" 
                           style={{color : "#ffbb00",width : "20px"}}></i> {c}
                        </motion.div>
                    })
                }
            </div>
        </div>}
        <div className="feedbackContainer">
            <div className="heading">
            <img className='icons' src="https://img.icons8.com/color/48/satisfied.png" alt="satisfied"/> Any feedback for this project ?
            </div>
            <form className="contactForm" action="https://formsubmit.co/vishalsavita809018@gmail.com" method="POST">

            <motion.div 
            initial={{ opacity: 0, transform : "translateY(140px)" }}
            whileInView={{ opacity: 1, transform : "translateY(0px)" }}
            transition={{ duration : 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="input-field">
                <label htmlFor="name" style={{color : accColor}}>Your name</label>
                <input type="text" name="name" id="name"  style={backStyle} />
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, transform : "translateY(140px)" }}
            whileInView={{ opacity: 1, transform : "translateY(0px)" }}
            transition={{ duration : 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="input-field">
                <label htmlFor="message" style={{color : accColor}}>Feedback <span style={{color : "#000", fontSize: "0.9rem"}}>(Please mention the project name here)</span></label>
                <textarea  name="message" style={backStyle}  id="message" 
                cols="30" rows="5" placeholder='Write your feedback here, It helps me a lot to improve my skills.'></textarea>
            </motion.div>

            <input type="hidden" name="_captcha" value="false" />
            <motion.button 
            initial={{ opacity: 0, transform : "translateY(140px)" }}
            whileInView={{ opacity: 1, transform : "translateY(0px)" }}
            transition={{ duration : 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="mainbtn" 
            style={{marginTop : "0px", backgroundColor : accColor}}>
                Send <i className='fa-solid fa-paper-plane'></i>
            </motion.button>

        </form>
        </div>
        <Footer />
    </div>
  )
}

export default ProjectInfo

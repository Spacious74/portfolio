import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer">
            <div className="mediaLinks">
                <div className="heading">Follow me at - </div>
                <div className="logos">
                    <Link to="https://github.com/Spacious74" 
                    className="logolink" target={"_blank"}
                    style={{color : "#fff"}}>
                        <i className="fa-brands fa-github"></i>&nbsp; Github
                    </Link>

                    <Link to="https://www.linkedin.com/in/vishal-savita-876624169/" 
                    className="logolink" target={"_blank"}
                    style={{color : "#fff"}}>
                        <i className="fa-brands fa-linkedin"></i>&nbsp; LinkedIn
                    </Link>

                    <Link to="https://www.hackerrank.com/spacious74" 
                    className="logolink" target={"_blank"}
                    style={{color : "#fff"}}>
                        <i className="fa-brands fa-hackerrank"></i>&nbsp; HackerRank
                    </Link>
                </div>
            </div>
        </div>
        <div className="lastText">
            © Designed and Developed by Vishal Savita
        </div>
    </div>
  )
}

export default Footer

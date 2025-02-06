import React, { useContext, useState } from "react";
import "./Contact.css";
import ThemeContext from "../../themeContext";
import { motion } from "framer-motion";

function Contact() {
  const contextTheme = useContext(ThemeContext);
  const accColor = contextTheme.accColor;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactmsg, setContactMsg] = useState("");

  const backStyle = {
    backgroundColor: contextTheme.lightmode ? "#fff" : "#26242C",
    color: contextTheme.lightmode ? "#000" : "#fff",
    borderColor: "#808080",
  };

  const handleFormSubmit = (e) => {
    if (name.length < 2) {
      e.preventDefault();
      return;
    } else if (email.length < 3) {
      e.preventDefault();
      return;
    } else if (contactmsg < 5) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="contact-cont">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(140px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
        className="heading"
      >
        Let's Collaborate
      </motion.div>
      <div className="formandimg">
        <form className="contactForm"
          action="https://formsubmit.co/vishalsavita809018@gmail.com" method="POST" >
          <div className="input-field">
            <label htmlFor="name" style={{ color: accColor }}>
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              id="name"
              style={backStyle}
            />
          </div>

          <div className="input-field">
            <label htmlFor="email" style={{ color: accColor }}> Your email </label>
            <input type="email" value={email} name="email" id="email" style={backStyle}
              onChange={(e) => {
                setEmail(e.target.value);
              }} 
            />
          </div>

          <div className="input-field">
            <label htmlFor="message" style={{ color: accColor }}>
              Message
            </label>
            <textarea
              name="message"
              value={contactmsg}
              onChange={(e) => {
                setContactMsg(e.target.value);
              }}
              style={backStyle}
              id="message"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <div className="fxcn" style={{width : '100%', justifyContent:"center"}}>
            <button className="mainbtn fxcn"
              style={{ marginTop: "0px", backgroundColor: accColor }}
              onSubmit={handleFormSubmit}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18.298 5.683c-.38.068-.916.244-1.776.53L10.03 8.378c-.828.276-1.412.471-1.832.635a5 5 0 0 0-.452.199c-.086.045-.116.07-.118.07a1 1 0 0 0 0 1.437a1 1 0 0 0 .118.071c.1.053.245.118.452.2c.42.163 1.004.358 1.832.634l.056.019c.273.09.513.17.734.287a3 3 0 0 1 1.25 1.25c.117.22.197.46.287.734l.02.056c.275.828.47 1.412.634 1.832a4 4 0 0 0 .199.452c.045.086.07.116.07.118a1 1 0 0 0 1.437 0a1 1 0 0 0 .071-.118c.053-.1.118-.245.2-.453c.163-.42.358-1.003.634-1.83l2.163-6.491c.287-.86.463-1.398.53-1.777l.005-.023zm.259-.023l-.01-.001zm-.216-.208l-.001-.009zm-.393-1.738c.55-.098 1.305-.127 1.885.453s.55 1.334.453 1.885c-.096.542-.323 1.221-.578 1.987l-.024.072l-2.164 6.49l-.01.03c-.264.792-.474 1.424-.659 1.896c-.173.445-.378.905-.688 1.227a3 3 0 0 1-4.326 0c-.31-.322-.515-.782-.688-1.227c-.185-.472-.395-1.104-.66-1.897l-.01-.028c-.12-.361-.147-.433-.176-.488a1 1 0 0 0-.417-.417c-.055-.03-.127-.056-.488-.177l-.028-.01c-.793-.264-1.425-.474-1.898-.659c-.444-.173-.904-.378-1.226-.688a3 3 0 0 1 0-4.326c.322-.31.782-.515 1.226-.688a45 45 0 0 1 1.898-.66l.028-.01l6.491-2.163l.072-.024c.766-.255 1.445-.482 1.987-.578" clip-rule="evenodd" /></svg>
              Send Message
            </button>
          </div>
        </form>
        {/* <div
          className="img-cont"
          style={{
            backgroundImage: `radial-gradient( ellipse farthest-corner at 10px 10px , ${accColor}, ${accColor} 50%, transparent 50%)`,
          }}
        ></div> */}
      </div>
    </div>
  );
}

export default Contact;

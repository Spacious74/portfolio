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
        Contact me
      </motion.div>
      <div className="formandimg">
        <form
          className="contactForm"
          action="https://formsubmit.co/vishalsavita809018@gmail.com"
          method="POST"
        >
          <motion.div
            initial={{ opacity: 0, transform: "translateY(140px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="input-field"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(140px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="input-field"
          >
            <label htmlFor="email" style={{ color: accColor }}>
              Your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              id="email"
              style={backStyle}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(140px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="input-field"
          >
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
          </motion.div>
          <input type="hidden" name="_captcha" value="false" />
          <motion.button
            initial={{ opacity: 0, transform: "translateY(140px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="mainbtn"
            style={{ marginTop: "0px", backgroundColor: accColor }}
            onSubmit={handleFormSubmit}
          >
            Send <i className="fa-solid fa-paper-plane"></i>
          </motion.button>
        </form>
        <div
          className="img-cont"
          style={{
            backgroundImage: `radial-gradient( ellipse farthest-corner at 10px 10px , ${accColor}, ${accColor} 50%, transparent 50%)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Contact;

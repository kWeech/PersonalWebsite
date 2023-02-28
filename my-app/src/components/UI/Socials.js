import classes from "./Socials.module.css";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const Socials = () => {
  return (
    <div className={classes.socials}>
      <div className={classes.line}></div>
      <IconContext.Provider
        value={{
          color: "#2d0c5b",
          size: "25px",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kenneth-weech-326559b4/"
        >
          <FaLinkedinIn
            onMouseOver={({ target }) => (target.style.color = "#5f43b2")}
            onMouseOut={({ target }) => (target.style.color = "#2d0c5b")}
          ></FaLinkedinIn>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kWeech"
        >
          <FaGithub
            onMouseOver={({ target }) => (target.style.color = "#5f43b2")}
            onMouseOut={({ target }) => (target.style.color = "#2d0c5b")}
          ></FaGithub>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:kenneth.weech@gmail.com"
        >
          <FaEnvelope
            onMouseOver={({ target }) => (target.style.color = "#5f43b2")}
            onMouseOut={({ target }) => (target.style.color = "#2d0c5b")}
          ></FaEnvelope>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://1drv.ms/b/s!Ap1Hp3RCpQoZ7yfirzVUM_dlu-fj?e=p5wJwZ"
        >
          <BsFillFileEarmarkPersonFill
            onMouseOver={({ target }) => (target.style.color = "#5f43b2")}
            onMouseOut={({ target }) => (target.style.color = "#2d0c5b")}
          ></BsFillFileEarmarkPersonFill>
        </a>
      </IconContext.Provider>
      <div className={classes.line}></div>
    </div>
  );
};

export default Socials;

import React from "react";
import classes from "./Dot.module.css";

const Dot = (props) => {
  const style = props.active
    ? { bgColor: "#5f43b2", brdrColor: "#2d0c5b", size: "20px" }
    : { bgColor: "#2d0c5b", brdrColor: "#5f43b2", size: "15px" };

  return (
    <>
      <a
        className={classes.dot}
        style={{
          "--bg-color": style.bgColor,
          "--brdr-color": style.brdrColor,
          "--size": style.size,
        }}
        href={`#${props.id_name}`}
      />
      {props.line && <div className={classes.line}></div>}
    </>
  );
};

export default Dot;

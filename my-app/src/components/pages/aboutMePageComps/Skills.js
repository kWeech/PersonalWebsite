import {
  DiSpark,
  DiJava,
  DiUnitySmall,
  DiJavascript1,
  DiHtml5,
  DiMysql,
  DiCss3,
  DiReact,
  DiPython,
  DiPostgresql,
} from "react-icons/di";
import {
  SiC,
  SiSpring,
  SiCplusplus,
  SiNextdotjs,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiDatabricks,
  SiPandas,
  SiNumpy,
  SiCsharp,
  SiTypescript,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./Skills.module.css";
import { useState, useEffect, useRef } from "react";
import avatar from "../../../assets/avatar.svg";

function debounce(callback, wait) {
  let timeoutId = null;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, arguments), wait);
  };
}

const Skills = () => {
  const skillsRef = useRef(null);
  const [iconPositions, setIconPositions] = useState(new Array(24).fill(0));
  const [thumbPosition, setThumbPosition] = useState(0);
  const iconSize = 13;
  let container;
  if (document.getElementById("container")) {
    container = document.getElementById("container");
  }
  // const scrollPosition = container.scrollTop;
  // console.log("containter" + scrollPosition);

  const handleScroll = debounce(() => {
    setThumbPosition(container.scrollTop);
  }, 0);

  useEffect(() => {
    if (container) {
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  useEffect(() => {
    //minus 1 for image and 1 for text
    const numComponents = skillsRef.current.childElementCount - 1;
    const changeFactor = -10;
    const angleChange = (thumbPosition / 5000) * changeFactor;

    const radiusPercent = 50;
    let tempPositions = [];
    let angle_dif = (360 * (Math.PI / 180)) / numComponents;
    let angle = 0;
    for (let i = 0; i < numComponents; i++) {
      tempPositions.push([
        `${
          Math.cos(angle + angleChange) * radiusPercent +
          radiusPercent -
          iconSize / 2
        }%`,
        `${
          Math.sin(angle + angleChange) * radiusPercent +
          radiusPercent -
          iconSize / 2
        }%`,
      ]);
      angle = angle + angle_dif;
    }

    setIconPositions(tempPositions);
  }, [thumbPosition]);

  return (
    <>
      <IconContext.Provider value={{ color: "white", size: `${iconSize}%` }}>
        <div ref={skillsRef} className={classes.skillsContainer}>
          <img src={avatar} alt="avatar"></img>

          {/* java */}
          <DiJava
            style={{
              position: "absolute",
              left: iconPositions[0][0],
              bottom: iconPositions[0][1],
            }}
          ></DiJava>
          <SiSpring
            style={{
              position: "absolute",
              left: iconPositions[1][0],
              bottom: iconPositions[1][1],
            }}
          ></SiSpring>
          {/* javsscript */}
          <DiJavascript1
            style={{
              position: "absolute",
              left: iconPositions[2][0],
              bottom: iconPositions[2][1],
            }}
          ></DiJavascript1>
          <DiHtml5
            style={{
              position: "absolute",
              left: iconPositions[3][0],
              bottom: iconPositions[3][1],
            }}
          ></DiHtml5>
          <DiCss3
            style={{
              position: "absolute",
              left: iconPositions[4][0],
              bottom: iconPositions[4][1],
            }}
          ></DiCss3>
          <DiReact
            style={{
              position: "absolute",
              left: iconPositions[5][0],
              bottom: iconPositions[5][1],
            }}
          ></DiReact>
          <SiNextdotjs
            style={{
              position: "absolute",
              left: iconPositions[6][0],
              bottom: iconPositions[6][1],
            }}
          ></SiNextdotjs>
          <FaNode
            style={{
              position: "absolute",
              left: iconPositions[7][0],
              bottom: iconPositions[7][1],
            }}
          ></FaNode>

          {/* python */}
          <DiPython
            style={{
              position: "absolute",
              left: iconPositions[8][0],
              bottom: iconPositions[8][1],
            }}
          ></DiPython>
          <SiPytorch
            style={{
              position: "absolute",
              left: iconPositions[9][0],
              bottom: iconPositions[9][1],
            }}
          ></SiPytorch>
          <DiSpark
            style={{
              position: "absolute",
              left: iconPositions[10][0],
              bottom: iconPositions[10][1],
            }}
          ></DiSpark>
          <SiDatabricks
            style={{
              position: "absolute",
              left: iconPositions[11][0],
              bottom: iconPositions[11][1],
            }}
          ></SiDatabricks>
          <SiTensorflow
            style={{
              position: "absolute",
              left: iconPositions[12][0],
              bottom: iconPositions[12][1],
            }}
          ></SiTensorflow>
          <SiScikitlearn
            style={{
              position: "absolute",
              left: iconPositions[13][0],
              bottom: iconPositions[13][1],
            }}
          ></SiScikitlearn>
          <SiPandas
            style={{
              position: "absolute",
              left: iconPositions[14][0],
              bottom: iconPositions[14][1],
            }}
          ></SiPandas>
          <SiNumpy
            style={{
              position: "absolute",
              left: iconPositions[15][0],
              bottom: iconPositions[15][1],
            }}
          ></SiNumpy>

          <SiC
            style={{
              position: "absolute",
              left: iconPositions[16][0],
              bottom: iconPositions[16][1],
            }}
          ></SiC>

          {/* c++ */}
          <SiCplusplus
            style={{
              position: "absolute",
              left: iconPositions[17][0],
              bottom: iconPositions[17][1],
            }}
          ></SiCplusplus>

          {/* c# */}
          <SiCsharp
            style={{
              position: "absolute",
              left: iconPositions[18][0],
              bottom: iconPositions[18][1],
            }}
          ></SiCsharp>

          {/* unity */}
          <DiUnitySmall
            style={{
              position: "absolute",
              left: iconPositions[19][0],
              bottom: iconPositions[19][1],
            }}
          ></DiUnitySmall>

          {/* sql */}
          <DiMysql
            style={{
              position: "absolute",
              left: iconPositions[20][0],
              bottom: iconPositions[20][1],
            }}
          ></DiMysql>
          {/* typescript */}
          <SiTypescript
            style={{
              position: "absolute",
              left: iconPositions[21][0],
              bottom: iconPositions[21][1],
            }}
          ></SiTypescript>
          {/* Postgresql */}
          <DiPostgresql
            style={{
              position: "absolute",
              left: iconPositions[22][0],
              bottom: iconPositions[22][1],
            }}
          ></DiPostgresql>
        </div>
      </IconContext.Provider>
    </>
  );
};
export default Skills;

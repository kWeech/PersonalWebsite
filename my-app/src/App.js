import classes from "./App.module.css";
import AboutMePage from "./components/pages/AboutMePage";
import ContactMePage from "./components/pages/ContactMePage";
import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";
import DotNav from "./components/UI/DotNav";
// import Navbar from "./components/UI/Navbar";
import Socials from "./components/UI/Socials";
import { useState, useEffect, useRef } from "react";
import GameOfLife from "./components/UI/SideBars/GameOfLife";

function App() {
  const divRef = useRef(null);
  const [childIds, setChildIds] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const numComponents = divRef.current.childElementCount;
    let childIds = [];

    for (let i = 0; i < numComponents; i++) {
      let child = divRef.current.children[i];
      // console.log(child);
      childIds.push(child.getAttribute("id"));
    }
    console.log(childIds);
    setChildIds(childIds);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
          console.log(`Current section: ${entry.target.id}`);
        }
      });
    }, options);

    childIds.forEach((id) => {
      observer.observe(document.getElementById(id));
    });

    return () => {
      childIds.forEach((id) => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, []);

  return (
    <div id="container" className={classes.container}>
      <GameOfLife></GameOfLife>
      {/* <Navbar></Navbar> */}
      <Socials></Socials>
      <DotNav dots={childIds} currentSection={currentSection}></DotNav>

      <div ref={divRef} className={classes.back}>
        <HomePage id="homePage"></HomePage>
        <ProjectPage id="projectPage"></ProjectPage>
        <AboutMePage id="aboutMePage"></AboutMePage>
        <ContactMePage id="contactMePage"></ContactMePage>
      </div>
    </div>
  );
}

export default App;

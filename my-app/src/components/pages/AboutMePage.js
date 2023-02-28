import classes from "./AboutMePage.module.css";
import Page from "../UI/Page";
import Skills from "./aboutMePageComps/Skills";

const AboutMePage = (props) => {
  return (
    <Page title="About" id={props.id}>
      <div className={classes.aboutMeContainer}>
        <div>
          <p className={classes.paragraph}>
            Hello, and welcome to my personal website! My name is Ken, and I'm
            currently pursuing a master’s degree in software engineering at the
            University of Calgary. As graduation approaches this winter, I'm
            eager to apply my knowledge and skills to create innovative software
            and continue my journey of learning in the field. As a lifelong
            learner at heart, one of the things I enjoy most about pursuing a
            career in software engineering is that it's a constantly evolving
            field, with new technologies and approaches emerging all the time.
            <br></br>
            <br></br>
            When I’m not programming and learning, I’m hitting the gym for a
            lifting session, lacing up my skates for a game of hockey, stepping
            onto the court for a match of squash, or booting up for a gaming
            session. These activities help me stay energized, focused, and
            engaged both in and out of the workplace.
          </p>
        </div>
        <div className={classes.skillsContainer}>
          <Skills></Skills>
        </div>
      </div>
    </Page>
  );
};

export default AboutMePage;

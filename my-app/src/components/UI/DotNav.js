import Dot from "./DotNavComps/Dot";
import classes from "./DotNav.module.css";

const DotNav = (props) => {
  return (
    <div className={classes.dotNav}>
      {props.dots.map((dot, index) => (
        <Dot
          key={index}
          active={props.currentSection === dot}
          id_name={dot}
          line={!(index === props.dots.length - 1)}
        />
      ))}
    </div>
  );
};

export default DotNav;

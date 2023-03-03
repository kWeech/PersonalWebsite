import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <>
      <h3>{`<${props.project.title}>`}</h3>
      <p className={classes.description}>{props.project.description}</p>
      <div className={classes.link}>
        <a href={props.project.link} target="_blank" rel="noopener noreferrer">
          See More
        </a>
      </div>
      <h3>{`</${props.project.title}>`}</h3>
    </>
  );
};

export default Project;

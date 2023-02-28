import classes from "./Page.module.css";

const Page = (props) => {
  console.log("page rerendered");
  return (
    <div className={classes.page} id={props.id}>
      <h2 className={classes.title}>{`<${props.title}>`}</h2>
      {props.children}
      <h2 className={classes.title}>{`</${props.title}>`}</h2>
    </div>
  );
};

export default Page;

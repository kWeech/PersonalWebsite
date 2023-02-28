import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      {/* <img className={classes.logo} src={logo}></img> */}
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="none"
          stroke="lightgrey"
          d="M2 40V1L9 4V17L22 10.5V4L29 1V14L15.5 20.5L29 27V40L22 37V30.5L9 24V37L2 40Z"
        />
      </svg>

      <p className={classes.right}>hi</p>
    </div>
  );
};

export default Navbar;

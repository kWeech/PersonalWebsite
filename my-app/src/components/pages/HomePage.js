import classes from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <div className={classes.homePage} id={props.id}>
      <p
        style={{
          // marginTop: "calc(30rem - 10vw)",
          position: "relative",
          marginTop: "35vh",
          // top: `${compHeight}%`,
        }}
      >
        My name is
      </p>
      <div className={classes.nameContainer}>
        <h1 className={classes.name}>Kenneth Weech</h1>
      </div>
      <p className={classes.welcome}>Welcome to my website!</p>
      <svg
        style={{
          top: "5rem",
          position: "relative",
          left: "50%",
          width: "60vw",
          strokeWidth: "4",
          transform: "translate(calc(-50% + 5px), -50%)",
        }}
        viewBox="0 0 2605 537"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="myGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stop-color="#5f43b2" stop-opacity="1" />
            <stop offset="50%" stop-color="#5f43b2" stop-opacity="1" />
            <stop offset="100%" stop-color="#5f43b2" stop-opacity="0" />
          </radialGradient>
        </defs>
        <path
          id="Vector 1"
          d="M41.5 537L665.5 1M249.5 537L770 1M454.5 537L886 1M671 537L986 1M879.5 537L1091.5 1M1090.5 537L1196 1M2563 537L1939 1M2355 537L1834.5 1M2150 537L1718.5 1M1933.5 537L1618.5 1M1725 537L1513 1M1514 537L1408.5 1M1302 537V1M1 204.5L354.5 1M1 130.5L245 1M1 71.5L129 1M1 293L460.5 1M1 412.5L568 1M2604 204.5L2250.5 1M2604 130.5L2360 1M2604 71.5L2476 1M2604 293L2144.5 1M2604 412.5L2037 1"
          stroke="url(#myGradient)"
        />
        <path
          id="Vector 2"
          d="M1 282H2604M1 48H2604M1 87H2604M1 126H2604M1 166H2604M1 205H2604M1 244H2604M1 322H2604M1 360H2604M1 399H2604M1 438H2604M1 478H2604M1 12H2604"
          stroke="url(#myGradient)"
        />
        <path
          className={classes.line1}
          stroke="#f5f5f5"
          id="Vector 3"
          d="M1090.5 536.5L1118 399H1487L1456 244H1302V2.5"
        />
        <path
          className={classes.line1}
          stroke="#f5f5f5"
          id="Vector 4"
          d="M1 322H126L340.5 166H2404.5L2604 293"
        />
        <path
          className={classes.line1}
          stroke="#f5f5f5"
          id="Vector 5"
          d="M2604 12H2270L2467.5 126H1692L1933.5 537"
        />
        <path
          className={classes.line1}
          stroke="#f5f5f5"
          id="Vector 6"
          d="M460.5 1L78 244H534L249.5 537"
        />
      </svg>
      <div className={classes.scrollArrow}>
        <a href="#projectPage">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;

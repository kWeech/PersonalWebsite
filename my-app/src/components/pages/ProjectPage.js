import classes from "./ProjectPage.module.css";
import Project from "./projectPageComps/Project";
import Page from "../UI/Page";

const project_list = [
  {
    title: "BroBot",
    description:
      "BroBot is a discord bot that I made for my friends and I. It has a variety of commands that can be used to make your discord experience more enjoyable. /Play allows you to play music from YouTube in your voice channel. /Image generates an AI image using DALLE. /Chat allows you to chat with a GPT-3 model. /Draft drafts picks from some of our favourite games.",
    link: "https://github.com/kWeech/BroBot",
  },
  {
    title: "Personal Website",
    description:
      "The website you're currently browsing was built with React.js.",
    link: "",
  },
  {
    title: "AutoFi Feature Flag Capstone",
    description:
      "Full stack project using Express.js and Next.js toggling AutoFi’s feature flags using the LaunchDarkly API.",
    link: "https://github.com/AutoFi-Feature-Flag-Management/Autofi-Feature-Flag-Management-System",
  },
  {
    title: "Beretta Electric Website",
    description:
      "berettaelectric.ca is a website built in Next.js for the electrical company Beretta Electric servicing the Kelowna/Vernon/Lake Country area.",
    link: "",
  },
  {
    title: "UofC Nursing Hackathon",
    description:
      "A website prototype in React.js to be accessed via phone for nurses to easier take notes via text to speech and access patients via QR codes.",
    link: "https://github.com/kWeech/UofCEngineeringNursingHackathon",
  },
  {
    title: "UofC Dino's Nanoleaf",
    description:
      "From the University of Calgary Nanoleaf Hackathon,  team's nanoleaf project transformed multiple HMTL source code files containing images into an animation of the UofC Dino stomping, roaring and breathing fire that can be displayed on an array of Nanoleaf panels using Python. Our project is currently being displayed on the 2nd floor of ICT at the University of Calgary.",
    link: "https://github.com/kWeech/UofC_nanoleaf_hackathon2022",
  },
  {
    title: "Mind Games",
    description:
      "From the NeurAlbertaTech Hackathon, our team created an auto scrolling game via Pygame where the player jumps via blinking while wearing an EEG headset.",
    link: "https://devpost.com/software/mind-games",
  },
  {
    title: "Movie Theatre App",
    description:
      "Full stack movie theatre app built on Spring, MySQL, and React with a team of 4.",
    link: "https://github.com/kWeech/ENSF614-FinalProject-FullstackTheatreTickets",
  },
  {
    title: "Student Registration App",
    description:
      "Full stack movie theatre app built on Spring, MySQL, and simple Javascript/HTML with a team of 3.",
    link: "https://github.com/kWeech/ENSF607-FullstackStudentRegistrationProject",
  },
  {
    title: "NLP Github Sentiment",
    description:
      "Natural language processing sentiment analysis machine learning model in Apache Spark.",
    link: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/653787253777680/3417887240428900/4029053541865654/latest.html",
  },
  {
    title: "NLP Github Links",
    description:
      "Natural language processing link analysis machine learning model in Apache Spark.",
    link: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/653787253777680/1337321041553986/4029053541865654/latest.html",
  },
];

const projects = project_list.map((prjct) => (
  <Project key={prjct.title} project={prjct}></Project>
));

const ProjectPage = (props) => {
  return (
    <Page title="Projects" id={props.id}>
      <div className={classes.projectPage}>{projects}</div>
    </Page>
  );
};

export default ProjectPage;

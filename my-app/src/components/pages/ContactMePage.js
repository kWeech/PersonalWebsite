import classes from "./ContactMePage.module.css";
import Page from "../UI/Page";
import EmailForm from "../UI/EmailForm";

const ContactMePage = (props) => {
  return (
    <Page title="Contact" id={props.id}>
      <div className={classes.contactMeContainer}>
        <p className={classes.text}>
          I hope that you found this website informative and engaging, and I
          invite you to connect with me if you have any questions or if you
          would like to collaborate. Thank you for visiting my website, and I
          look forward to hearing from you!
        </p>
        <EmailForm></EmailForm>
      </div>
    </Page>
  );
};

export default ContactMePage;

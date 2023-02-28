import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
import classes from "./EmailForm.module.css";

export const EmailForm = () => {
  const form = useRef();
  const [modal, setModal] = useState({
    open: false,
    message: "hello",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gp7ugqz",
        "template_i8t652l",
        form.current,
        "RPyzcAsj9NQpZDRKT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setModal({
            open: true,
            message: "Message sent successfully. Thank you!",
          });
        },
        (error) => {
          console.log(error.text);
          setModal({
            open: true,
            message:
              "Error sending message. Please try again or click the email link on the sidebar.",
          });
        }
      );
  };

  const closeModal = () => {
    setModal({
      show: false,
      message: "",
    });
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={classes.container}>
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea name="message" placeholder="Message" required />
        <button type="submit">SEND</button>
      </form>
      <Modal modal={modal} onClose={closeModal}></Modal>
    </>
  );
};

export default EmailForm;

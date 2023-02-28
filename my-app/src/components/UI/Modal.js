import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  if (!props.modal.open) {
    return null;
  }
  //   const [modal, setModal] = useState(false);

  return ReactDOM.createPortal(
    <>
      <div className={classes.overlay}></div>
      <div className={classes.modal}>
        <p>{props.modal.message}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;

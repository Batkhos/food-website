import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./ModelStyle.css";

const portalElement = document.getElementById("overlays");

const ModalOverlay = (props) => {
  return (
    <div className= 'modal'>
      <div className= 'content'>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
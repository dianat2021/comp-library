import modalStyles from "./Modal.module.css";
import Button from "../Button/Button";
import { useState } from "react";
const Modal = ({ title, children, onClose, containerClassName }) => {
  return (
    <div className={modalStyles.modalBackdrop}>
      <div className={`${modalStyles.modalContainer} ${containerClassName}`}>
        <header>
          <h2>{title}</h2>
        </header>
        <main className={modalStyles.modalContent}>
          <p> {children}</p>
          <Button className={modalStyles.closeButton} onClick={onClose}>
            Close
          </Button>
        </main>
      </div>
    </div>
  );
};

export default Modal;

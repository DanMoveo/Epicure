// Modal.tsx
import React from "react";
import "./Modal.scss";

interface ModalProps {
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div>{children}</div>
    </div>
  );
};

export default Modal;

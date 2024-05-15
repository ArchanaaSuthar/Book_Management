import React from 'react';

const Modal = ({ isOpen, toggleModal, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}></span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
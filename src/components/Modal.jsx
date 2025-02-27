import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div style={{ background: 'rgba(0,0,0,0.8)', color: 'white', padding: '20px' }}>
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;

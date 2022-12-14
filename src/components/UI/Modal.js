import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClosed} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content} />
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  console.log('inside the modal props: ', props);
  return (
    // <Fragment>
    //   <Fragment>
    //     <Backdrop />
    //     <ModalOverlay>{props.children}</ModalOverlay>
    //   </Fragment>

    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClosed={props.onClosed} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

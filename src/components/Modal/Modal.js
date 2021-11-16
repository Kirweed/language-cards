import React from "react";
import styles from './Modal.module.scss';
import Form from "../Form/Form";

const Modal = ({closeFn, addCollectionFn}) => (
    <div className={styles.wrapper}>
        <div className={styles.closeElement} onClick={closeFn}>X</div>
        <Form onSubmit={addCollectionFn}/>
    </div>
);

export default Modal;
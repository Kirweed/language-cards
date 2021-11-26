import React from "react";
import styles from "./AddButton.module.scss";

const AddButton = ({ actionFn }) => (
  <div className={styles.wrapper} onClick={actionFn}>
    <i className="fas fa-plus-square"></i>
  </div>
);

export default AddButton;

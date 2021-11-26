import React from "react";
import styles from "./NoItems.module.scss";
import AddButton from "../Button/AddButton";

const NoItems = ({ action }) => (
  <div className={styles.noItems}>
    <p>Nie masz dodanej jeszcze żadnej kolekcji, dodaj ją i zacznij naukę!</p>
    <AddButton actionFn={action} />
  </div>
);

export default NoItems;

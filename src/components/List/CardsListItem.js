import React from "react";
import styles from "./ListItem.module.scss";

const CardListItem = ({ id, nativeWord, foreignWord, collection }) => (
  <div className={styles.wrapper + " " + styles.wrapperCard}>
    <div className={styles.deleteButton}>
      <i class="fas fa-trash"></i>
    </div>
    <h2>{foreignWord}</h2>
    <p>{collection.topic}</p>
  </div>
);

export default CardListItem;

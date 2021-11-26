import React from "react";
import styles from "./Card.module.scss";

const Card = ({ item, collection }) => (
  <div className={styles.wrapper}>
    <h1>{item.foreignWord}</h1>
  </div>
);

export default Card;

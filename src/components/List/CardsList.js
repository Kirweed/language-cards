import React from "react";
import CardsListItem from "./CardsListItem";
import styles from "./List.module.scss";

const CardsList = ({ cards, collection }) => (
  <div className={styles.wrapper}>
    {cards.map((card) => (
      <CardsListItem key={cards.id} {...card} collection={collection} />
    ))}
  </div>
);

export default CardsList;

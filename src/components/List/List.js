import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";
import { Link } from "react-router-dom";

const List = ({ collections, openModalFn }) => (
  <div className={styles.wrapper}>
    {collections.map((collection) => (
      <Link to={`/collections/${collection.id}`}>
        <ListItem key={collection.id} {...collection} />
      </Link>
    ))}
    <ListItem openModalFn={openModalFn} />
  </div>
);

export default List;

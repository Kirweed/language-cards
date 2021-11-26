import React from "react";
import CollectionListItem from "./CollectionListItem";
import styles from "./List.module.scss";
import { Link } from "react-router-dom";

const CollectionsList = ({ collections, openModalFn }) => (
  <div className={styles.wrapper}>
    {collections.map((collection) => (
      <Link to={`/collections/${collection.id}`}>
        <CollectionListItem key={collection.id} {...collection} />
      </Link>
    ))}
    <CollectionListItem openModalFn={openModalFn} />
  </div>
);

export default CollectionsList;

import React from "react";
import { useParams } from "react-router-dom";
import styles from "./CollectionView.module.scss";
import CardsList from "../../components/List/CardsList";

const CollectionView = ({ getCollectionFn }) => {
  let params = useParams();

  const collection = getCollectionFn(params.collectionId);

  return collection ? (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wordsCountWrapper}>
          {collection.items.length}
        </div>
        <div className={styles.header}>
          <h1>{collection.topic}</h1>
        </div>
        <div className={styles.languages}>
          <h3>{collection.nativeLang}</h3>
          <i class="fas fa-long-arrow-alt-right"></i>
          <h2>{collection.foreignLang}</h2>
        </div>
        <p className={styles.description}>{collection.description}</p>
      </div>
      <div className={styles.cardGrid}>
        <CardsList cards={collection.items} collection={collection} />
      </div>
    </>
  ) : (
    <p>Brak kolekcji o takim id</p>
  );
};

export default CollectionView;

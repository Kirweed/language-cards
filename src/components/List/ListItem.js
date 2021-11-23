import React from "react";
import AddButton from "../Button/AddButton";
import AppContext from "../context";
import styles from "./ListItem.module.scss";

const ListItem = ({
  id,
  nativeLang,
  foreignLang,
  description,
  topic,
  ...props
}) => {
  let preparedDescription = "";

  if (!props.openModalFn) {
    if (description.length > 110) {
      const index = description.slice(100, -1).indexOf(" ");

      if (index >= 0 && index <= 25) {
        preparedDescription = description.slice(0, 100 + index) + "...";
      } else {
        preparedDescription = description.slice(0, 100) + "...";
      }
    } else {
      preparedDescription = description;
    }
  }

  return id ? (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <div className={styles.deleteButton} onClick={() => context(id)}>
            <i class="fas fa-trash"></i>
          </div>
          Aktualnie uczysz się:
          <h2>{topic}</h2>
          <h3>{foreignLang}</h3>
          <p className={styles.description}>{preparedDescription}</p>
        </div>
      )}
    </AppContext.Consumer>
  ) : (
    <div
      className={styles.wrapper + " " + styles.wrapperCollectionPlaceholder}
      onClick={props.openModalFn}
    >
      Dodaj nową kolekcję
      <AddButton />
    </div>
  );
};

export default ListItem;

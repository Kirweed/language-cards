import React from "react";
import styles from './NoItems.module.scss';
import Button from "../Button/Button";

const NoItems = () => (
    <div className={styles.noItems}>
        <p>
            Nie masz dodanej jeszcze żadnej kolekcji, dodaj ją i zacznij naukę!
        </p>
        <Button>Dodaj nową kolekcję!</Button>
    </div>
);

export default NoItems;
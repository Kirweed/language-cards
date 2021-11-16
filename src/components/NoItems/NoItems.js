import React from "react";
import { Link } from 'react-router-dom';
import styles from './NoItems.module.scss';
import AddButton from "../Button/AddButton";

const NoItems = () => (
    <div className={styles.noItems}>
        <p>
            Nie masz dodanej jeszcze żadnej kolekcji, dodaj ją i zacznij naukę!
        </p>
        <Link end to='/collections' className={styles.link}>
            <AddButton />
        </Link>
    </div>
);

export default NoItems;
import React from "react";
import styles from './Form.module.scss';

const Form = (props) => (
    <form className={styles.wrapper} {...props}>
        <input type='text' placeholder="Język do nauki" />
        <input type='text' placeholder="Język macierzysty" />
        <textarea type='text' placeholder="Opis kolekcji" />
        <button type="submit">Dodaj kolekcję</button>
    </form>
);

export default Form;
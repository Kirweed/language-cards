import React from "react";
import AddButton from "../Button/AddButton";
import styles from './ListItem.module.scss';

const ListItem = ({id, nativeLang, foreignLang, description, ...props}) => {
    let preparedDescription = '';
    
    if( !props.openModalFn ) {
        if(description.length > 110) {
            const index = description.slice(100, -1).indexOf(' ');

            if( index >= 0 && index <=25) {
                preparedDescription = description.slice(0, 100 + index) + "...";
            } else {
                preparedDescription = description.slice(0, 100) + "...";
            }
        } else {
            preparedDescription = description;
        }
    }

    return (
        id ? 
            <div className={styles.wrapper}>
                Aktualnie uczysz się: 
                <h2>{foreignLang}</h2>
                <h3>{nativeLang}</h3>
                <p className={styles.description}>{preparedDescription}</p>
            </div> : 
            <div 
                className={styles.wrapper + ' ' + styles.wrapperCollectionPlaceholder} 
                onClick={props.openModalFn}
            >
                Dodaj nową kolekcję
                <AddButton />
            </div>
    );
};

export default ListItem;
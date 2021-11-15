import React from "react";
import styles from './ListItem.module.scss';

const ListItem = ({nativeLang, foreignLang, description}) => {
    let preparedDescription = '';
    
    if(description.length > 120) {
        const index = description.slice(110, -1).indexOf(' ');
        if( index >= 0) {
            preparedDescription = description.slice(0, 110 + index) + "...";
        }
    }

    return (
        <div className={styles.wrapper}>
            Aktualnie uczysz się: 
            <h2>{foreignLang}</h2>
            <h3>{nativeLang}</h3>
            <p className={styles.description}>{preparedDescription}</p>
        </div>
    );
};

export default ListItem;
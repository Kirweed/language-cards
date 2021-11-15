import React from "react";
import ListItem from "./ListItem";
import styles from './List.module.scss';

const List = ({collections}) => (
    <div className={styles.wrapper} >
        {collections.map(collection => (
        <ListItem key={collection.id} {...collection}/>
        )) }
    </div>
);

export default List;
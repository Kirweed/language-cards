import React from "react";
import ListItem from "./ListItem";
import styles from './List.module.scss';

const List = ({collections, openModalFn}) => (
    <div className={styles.wrapper} >
        {collections.map(collection => (
            <ListItem key={collection.id} {...collection}/>
        ))}
        <ListItem openModalFn={openModalFn}/>
    </div>
);

export default List;
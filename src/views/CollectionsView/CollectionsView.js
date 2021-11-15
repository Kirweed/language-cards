import React from "react";
import NoItems from "../../components/NoItems/NoItems";
import styles from './CollectionsView.module.scss';
import List from '../../components/List/List';

const CollectionsView = ({collections}) => (
    collections.length ? <List collections={collections} /> : <NoItems />
);

export default CollectionsView;
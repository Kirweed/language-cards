import React from "react";
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className={styles.wrapper}>
        <NavLink end to='/' className={styles.navLink}>
            <h1 className={styles.logo}>SŁOWOTEKA</h1>
        </NavLink>
        <NavLink to='/collections' className={styles.navLink}>
            Kolekcje
        </NavLink>
    </header>
);

export default Header;
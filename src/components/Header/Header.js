import React from "react";
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className={styles.wrapper}>
        <NavLink 
            end to='/' 
            className={({ isActive }) => styles.navLink + " " + (isActive ? styles.navLinkActive : "")}
        >
            <h1 className={styles.logo}>SŁOWOTEKA</h1>
        </NavLink>
        <NavLink 
            to='/collections' 
            className={({ isActive }) => styles.navLink + " " + (isActive ? styles.navLinkActive : "")}
        >
            Kolekcje
        </NavLink>
    </header>
);

export default Header;
import React from "react";
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({children}) => (
    <div className={styles.wrapper}>
        <Link end to='/collections' className={styles.link}>
            <i className="fas fa-plus-square"></i>
        </Link>
    </div>
);

export default Button;
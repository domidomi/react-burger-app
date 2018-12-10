import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <button>MENU</button>
            <Logo />
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default toolbar

import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <button>MENU</button>
            <Logo />
            <nav>
                <ul>
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default toolbar

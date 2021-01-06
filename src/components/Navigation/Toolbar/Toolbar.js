import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css'
import Menu from '../Menu/Menu'

const toolbar = (props) => {
    return ( 
        <header className={classes.Toolbar}>
            <Menu open={props.open}/>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.NavItems}>
                <NavigationItems />
            </nav>
        </header>
     );
}
 
export default toolbar;
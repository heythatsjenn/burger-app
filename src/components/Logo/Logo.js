import React from 'react';
import Logo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const logo = () => {
    return (<div className={classes.Logo}><img src={Logo} alt="logo"/></div> );
}
 
export default logo;
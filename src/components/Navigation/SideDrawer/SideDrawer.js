import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'

const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.showSideDrawer){
        attachedClasses[1] = classes.Open;
    }
    return ( 
        <Auxiliary>
            <Backdrop show={props.showSideDrawer} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
     );
}
 
export default sideDrawer;
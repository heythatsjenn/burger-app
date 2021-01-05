import Auxiliary from "../../hoc/Auxiliary";
import React from 'react';
import classes from "./Layout.css"
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return ( 
        <Auxiliary>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary> 
    );
}
 
export default layout;
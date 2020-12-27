import Auxiliary from "../../hoc/Auxiliary";
import React from 'react';
import classes from "./Layout.css"

const layout = (props) => {
    return ( 
        <Auxiliary>
            <div>Somne stuff should go here</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary> 
    );
}
 
export default layout;
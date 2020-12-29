import React from 'react';
import { ProgressPlugin } from 'webpack';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
]

const buildControls = (props) => {
    return ( 
        <div className={classes.BuildControls}>
            {controls.map(control => <BuildControl 
                key={control.label} 
                label={control.label} 
                added={() => props.ingredientAdded(control.type)}/>)}
        </div>
    );
}
 
export default buildControls;
import React from 'react';
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
            <p>Total Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(control => <BuildControl 
                key={control.label} 
                label={control.label} 
                added={() => props.ingredientAdded(control.type)}
                removed={()=> props.ingredientRemoved(control.type)}
                disabled = {props.disabledInfo[control.type]}
                />)}
            <button disabled={!props.purchasable} className={classes.OrderButton} onClick={()=>{props.purchaseHandler(true)}}>ORDER NOW</button>
        </div>
    );
}
 
export default buildControls;
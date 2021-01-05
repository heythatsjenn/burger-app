import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    let ingredients = props.ingredients
    let ingredientSummary = Object.keys(ingredients).map(ingredient => 
        <li>
            <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {ingredients[ingredient]}
        </li>
    );
    return ( 
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.continue}type='Success'>CONTINUE</Button>
            <Button clicked={props.cancel}type='Danger'>LEAVE</Button>
        </Auxiliary>
     );
}
 
export default orderSummary;
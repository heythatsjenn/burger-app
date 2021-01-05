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
            <p>Continue to checkout?</p>
            <Button type='Success'>CONTINUE</Button>
            <Button type='Danger'>LEAVE</Button>
        </Auxiliary>
     );
}
 
export default orderSummary;
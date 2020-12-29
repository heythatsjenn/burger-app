import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.css'
const burger = (props) => {

    let ingredientNames = Object.keys(props.ingredients);
    let ingredientValues = Object.values(props.ingredients);
    
    let transformedIngredients = ingredientNames.map((ingredientName, i) =>{
         return([...Array(ingredientValues[i])].map((_, k) =>{
         return(<BurgerIngredient key={ingredientName + k} type={ingredientName} />);
         }));
     })
     .reduce((arr, el) =>{
        return(arr.concat(el))
    }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
 
    return ( 
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
     );

}
 
export default burger;
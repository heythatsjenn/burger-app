import React from 'react';
import Auxiliary from "../../hoc/Auxiliary";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = () => {
    return ( 
        <Auxiliary>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </Auxiliary>
     );
}
 
export default burger;
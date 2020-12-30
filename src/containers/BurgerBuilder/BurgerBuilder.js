import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad:0.5,
    bacon:1,
    cheese:1,
    meat: 1.5,
}

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat: 0,
        },
        totalPrice: 7,
        purchasable: false
      }

      updatePurchasable = (ingredients) =>{
        let ingredientSum = Object.keys(ingredients).map((key)=> ingredients[key])
        .reduce((sum, el)=> sum + el, 0);
        if(ingredientSum){
            this.setState({purchasable: true});
        }
        else{
            this.setState({purchasable: false});
        }
    }

      ingredientAddedHandler = (type) =>{

          let newCount = this.state.ingredients[type] + 1;
          let updatedIngredients =  {...this.state.ingredients};
          updatedIngredients[type] = newCount;

          let price = INGREDIENT_PRICES[type];
          let updatedTotalPrice = this.state.totalPrice + price;

          this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});

          this.updatePurchasable(updatedIngredients);
          

      }

      ingredientRemovedHandler = (type) =>{

        let newCount = this.state.ingredients[type] - 1;
        if(newCount+1 <= 0){
            return;
        }
        let updatedIngredients =  {...this.state.ingredients};
        updatedIngredients[type] = newCount;

        let price = INGREDIENT_PRICES[type];
        let updatedTotalPrice = this.state.totalPrice - price;

        this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});

        this.updatePurchasable(updatedIngredients);
    }



    render() {

        let disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return ( 
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded ={this.ingredientAddedHandler}
                    ingredientRemoved = {this.ingredientRemovedHandler}
                    disabledInfo = {disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Auxiliary>
         );
    }
}
 
export default BurgerBuilder;
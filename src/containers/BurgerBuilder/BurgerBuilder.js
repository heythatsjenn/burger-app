import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Burger from '../../components/Burger/Burger'

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
        purchasable: false,
        purchasing: false,
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
        if(this.state.ingredients[type] <= 0){
            return;
        }
        let newCount = this.state.ingredients[type] - 1;
        let updatedIngredients =  {...this.state.ingredients};
        updatedIngredients[type] = newCount;

        let price = INGREDIENT_PRICES[type];
        let updatedTotalPrice = this.state.totalPrice - price;

        this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});

        this.updatePurchasable(updatedIngredients);
    }

    purchaseHandler = (bool) =>{
        this.setState({purchasing: bool});
    }

    render() {

        console.log(this.state.purchasing);

        let disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return ( 
            <Auxiliary>
                <Modal show={this.state.purchasing} purchaseHandler ={this.purchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded ={this.ingredientAddedHandler}
                    ingredientRemoved = {this.ingredientRemovedHandler}
                    disabledInfo = {disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchaseHandler ={this.purchaseHandler}
                    ordering = {this.state.purchasing}
                />
            </Auxiliary>
         );
    }
}
 
export default BurgerBuilder;
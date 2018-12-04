import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 0.2,
  bacon: 1,
  cheese: 0.6,
  meat: 1.3
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 3
  }

  addIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;

    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  }

  render() {
    return (
      <Auxi>
        <Burger ingredients={this.state.ingredients}></Burger>
        Total price: {this.state.totalPrice}
        <BuildControls 
        ingredientAdded={this.addIngredientHandler}
        ingredientRemoved={this.removeIngredientHandler}
        ></BuildControls>
      </Auxi>
    )
  }
}

export default BurgerBuilder;
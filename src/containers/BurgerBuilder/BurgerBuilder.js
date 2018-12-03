import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {
  render() {
    return (
      <Auxi>
        <Burger></Burger>
        <div>Build controls</div>
      </Auxi>
    )
  }
}
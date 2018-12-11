import React from 'react'

import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const ingredientsList = Object.keys(props.ingredients)
    .map(ingKey => {
        return (
            <li key={ingKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {props.ingredients[ingKey]}
            </li>
        );
    })

    return (
        <Auxi>
            <h3>Your order</h3>
            <p>Burger with following ingredients:</p>
            <ul>
                {ingredientsList}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Auxi>
    )

}

export default orderSummary;

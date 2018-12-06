import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];


const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Total price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
      {controls.map(el => (
        <BuildControl
          key={el.label}
          label={el.label}
          add={() => props.ingredientAdded(el.type)}
          remove={() => props.ingredientRemoved(el.type)}
          disabled={props.disabled[el.type]} />
      ))}
      <button className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.proceedOrdering}>
        Buy a burger!
      </button>
    </div>
  )
}

export default buildControls

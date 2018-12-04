import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', name: 'salad' },
  { label: 'Bacon', name: 'bacon' },
  { label: 'Cheese', name: 'cheese' },
  { label: 'Meat', name: 'meat' },
];


const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(el => (
        <BuildControl key={el.label} label={el.label} />
      ))}
    </div>
  )
}

export default buildControls

import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let arrayOfIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    console.log(arrayOfIngredients);

    if (arrayOfIngredients.length === 0) {
        arrayOfIngredients = <p>Add something!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {arrayOfIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger

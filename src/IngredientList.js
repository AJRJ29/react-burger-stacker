import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = (props) => {
  return (
    <div>
      <ul>
        {props.ingredients.map((ingredient) => {
          return (
          <li id={ingredient} onClick={(e) => props.action(e)}>
            <Ingredient ingredient={ingredient} />
          </li>
        )})}
      </ul>
    </div>
    )   
  }

export default IngredientList;
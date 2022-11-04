import React from 'react';
import IngredientType from "../../types d";

interface PropsIngredients {
  item: IngredientType;
}

const Ingredients: React.FC<PropsIngredients> = (props) => {
  return (
    <div className="d-flex justify-content-between mt-4">
      <span>
          <img src={props.item.image} alt="Ingredient image"/>
          <p className="d-inline-block">{props.item.name}</p>
      </span>
      <span className="m-4">
        <b className="m-5">x 1</b>
        <button className="m-2">Delete</button>
      </span>

    </div>
  );
};

export default Ingredients;
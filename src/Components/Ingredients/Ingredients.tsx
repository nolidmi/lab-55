import React from 'react';
import IngredientType from "../../types d";

interface PropsIngredients {
  item: IngredientType;
  count: number;
  onHandlerClick: React.MouseEventHandler;
  delete: React.MouseEventHandler;
}


const Ingredients: React.FC<PropsIngredients> = (props) => {
  return (
    <div className="d-flex justify-content-between m-4">
      <span onClick={props.onHandlerClick}>
          <img  src={props.item.image} alt="Ingredient image"/>
      </span>
      <p className="d-inline-block ms-3">{props.item.name}</p>
      <span className="m-4">
        <b className="m-5">x {props.count}</b>
        <button onClick={props.delete} className="m-2">Delete</button>
      </span>

    </div>
  );
};

export default Ingredients;
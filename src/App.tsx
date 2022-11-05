import React, {useState} from 'react';
import './App.css';
import IngredientType from "./types d";

import meat from './assets/meat.png';
import chess from './assets/chess.png';
import salat from './assets/salat.png';
import bekon from './assets/bekon.png';
import Ingredients from "./Components/Ingredients/Ingredients";
import {Buffer} from "buffer";
import Burger from "./Components/Cards/Burger";

const INGREDIENTS: IngredientType[] = [
  {name: 'Meat', price: 80, image: meat},
  {name: 'Cheese', price: 50, image: chess},
  {name: 'Salat', price: 10, image: salat},
  {name: 'Bekon', price: 60, image: bekon},
];

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salat', count: 0},
    {name: 'Bekon', count: 0},
  ]);

  const addCount = (index: number) => {
    const ingredientsCopy = ingredients.map(ingredients => {
      return {
        ...ingredients,
        count: ingredients.count + 1,
      }
    });
  }


  const deletePerson = (index: number) => {
    const ingredientsCopy = [...ingredients];
    ingredientsCopy.splice(index, 1);
    setIngredients(ingredientsCopy);
  }


  return (
    <div className="container">
      <div className="wrapper">
        <h3>Ingredients</h3>
        <div className="ing-wrap">
          {INGREDIENTS.map((item, index) => (
            <Ingredients
              key={index}
              item={item}
              count={ingredients[index].count}
              onHandlerClick={() => addCount(index)}
              delete={() => deletePerson(index)}
            />
          ))}</div>

      </div>
      <div className="wrapper">
        <h3>Burger</h3>
        <Burger/>
        <p className="text-center fs-4 fw-bold">Price: </p>
      </div>
    </div>
  );
}

export default App;

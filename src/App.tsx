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
  {name: 'Chess', price: 50, image: chess},
  {name: 'Salat', price: 10, image: salat},
  {name: 'Bekon', price: 60, image: bekon},
];

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <h3>Ingredients</h3>
        <div className="ing-wrap">
          {INGREDIENTS.map((item, index) => (
          <Ingredients key={index} item={item}/>
        ))}</div>

      </div>
      <div className="wrapper">
        <h3>Burger</h3>
        <Burger />
      </div>
    </div>
  );
}

export default App;

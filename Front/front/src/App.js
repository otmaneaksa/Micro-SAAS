import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealPlanner from './Components/MealPlanner';
import GroceryList from './Components/GroceryList';

function App() {
  return (
    <div className="App">
      <MealPlanner/>
    </div>
  );
}

export default App;

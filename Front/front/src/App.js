import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealPlanner from './Components/MealPlanner';
import GroceryList from './Components/GroceryList';

function App() {
  /*const [mealPlan, setMealPlan] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  useEffect(() => {
    // Fetch meal plan from backend
    axios.get('/api/meal-plan')
      .then(response => setMealPlan(response.data))
      .catch(error => console.error(error));
  }, []);
  const generateGroceryList = () => {
    axios.post('/api/grocery-list', { meals: mealPlan })
      .then(response => setGroceryList(response.data))
      .catch(error => console.error(error));
  };*/
  return (
    <div className="App">
      <h1>Planificateur de Repas</h1>
      <MealPlanner/>
      {/*<button onClick={generateGroceryList}>Générer la Liste de Courses</button>*/}
      <GroceryList/>
    </div>
  );
}

export default App;

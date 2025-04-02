import React, { useState } from 'react';
import axios from 'axios';

const GroceryList = ({ mealPlan }) => {
  const [groceryList, setGroceryList] = useState([]);

  const generateGroceryList = () => {
    axios.post('/api/grocery-list', { meals: mealPlan })
      .then(response => setGroceryList(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Liste de Courses</h2>
      <button onClick={generateGroceryList}>Générer la Liste</button>
      <ul>
        {groceryList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
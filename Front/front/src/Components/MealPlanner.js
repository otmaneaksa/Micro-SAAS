import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealPlanner = ({ dietType }) => {
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    // Fetch meal plan from backend
    axios.get(`/api/meal-plan?diet=${dietType}`)
      .then(response => setMealPlan(response.data))
      .catch(error => console.error(error));
  }, [dietType]);

  return (
    <div>
      <h2>Plan de Repas</h2>
      <ul>
        {mealPlan.map((meal, index) => (
          <li key={index}>{meal.day}: {meal.meal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealPlanner;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeLibrary = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from backend
    axios.get('/api/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Bibliothèque de Recettes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeLibrary;
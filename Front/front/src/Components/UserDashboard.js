import React from 'react';
import MealPlanner from './MealPlanner';
import GroceryList from './GroceryList';
import RecipeLibrary from './RecipeLibrary';

const UserDashboard = ({ dietType }) => {
  return (
    <div>
      <h1>Tableau de Bord</h1>
      <MealPlanner dietType={dietType} />
      <GroceryList />
      <RecipeLibrary />
    </div>
  );
};

export default UserDashboard;
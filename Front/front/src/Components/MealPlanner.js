import React, { useState, useEffect } from 'react';
import WeaklyPlan from './WeaklyPlan';
import MealSugg from './MealSugg';
import NutritionSum from './NutritionSum';
import axios from 'axios';

const MealPlanner = ({ dietType }) => {

  return (
    <div>
       <WeaklyPlan/>
       <MealSugg/>
       <NutritionSum/>
    </div>
  );
};

export default MealPlanner;
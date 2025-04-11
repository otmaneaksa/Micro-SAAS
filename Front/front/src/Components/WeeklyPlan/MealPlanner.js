import React, { useState, useEffect } from 'react';
import WeeklyPlan from './WeeklyPlan';
import MealSugg from './MealSugg';
import NutritionSum from './NutritionSum';
import axios from 'axios';
import styled from 'styled-components';

const MealPlanner = () => {
  const MealContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;`;
  return (
    <MealContainer>
      <div>
        <WeeklyPlan/>
      </div>
      <div>
        <MealSugg/>
       <NutritionSum/>
      </div>
    </MealContainer>
  );
};

export default MealPlanner;
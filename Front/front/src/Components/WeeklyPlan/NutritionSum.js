import React from 'react'
import { useState, useEffect} from 'react'
import styled from 'styled-components';

export default function NutritionSum() {
  const [nutrition, setNutrition] = useState({
    calories:0,
    protein:0,
    carbs:0,
    fats:0
  });
  const NutritionSumContainer = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.1);
  `;
  return (
    <NutritionSumContainer>
        <h2>Nutrition Summary</h2>
        <ul style={{listStyleType:"none", float:"left",textAlign:"left"}}>
            <li>calories:{nutrition.calories} kcal</li>
            <li>Protein:{nutrition.protein}g</li>
            <li>Carbs:{nutrition.carbs}g</li>
            <li>Fats:{nutrition.fats}</li>
        </ul>    
    </NutritionSumContainer>
  )
}

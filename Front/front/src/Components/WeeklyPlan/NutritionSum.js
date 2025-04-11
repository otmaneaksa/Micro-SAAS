import React from 'react'
import { useState, useEffect} from 'react'

export default function NutritionSum() {
  const [nutrition, setNutrition] = useState({
    calories:0,
    protein:0,
    carbs:0,
    fats:0
  });
  return (
    <>
        <h2>Nutrition Summary</h2>
        <ul>
            <li>calories:{nutrition.calories} kcal</li>
            <li>Protein:{nutrition.protein}g</li>
            <li>Carbs:{nutrition.carbs}g</li>
            <li>Fats:{nutrition.fats}</li>
        </ul>    
    </>
  )
}

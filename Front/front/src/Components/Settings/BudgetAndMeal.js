import React, {useState} from 'react';
import styled from 'styled-components';

export default function BudgetAndMeal() {
  const [meals, setMeals] = useState(["Breakfast", "Lunch", "Dinner", "Collation"]);
  return (
    <>
        <h2>Budget and Meal frequency:</h2>
        <div>
            <h3>Budget:</h3>
            <input type="number"/>
        </div>
        <div>
          <h3>Number of meals per Day:</h3>
          {meals.map((meal,index)=>{
            return(
              <>
                <button>{meal}</button>
              </>
            )
          })}
        </div>
    </>
  )
}

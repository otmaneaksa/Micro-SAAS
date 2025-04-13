import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function MealSugg() {
const [meals, setMeals] = useState({
    meal1:'Grilled Chicken Salad',
    meal2:'Vegetable Stir Fry',
    meal3:'Pasta Primavera'
})
  const SugItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color:#7AC6D2;
  border-radius: 5px;
  margin: 10px;
  `;
  const MealSuggContainer = styled.div`
    border:1px solid white;
    box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.1);`;
  return (
    <MealSuggContainer> 
        <h2>Meal Suggestions</h2>
        <div className="meal-suggestions">
            {/*meals.map((meal, index) => {
                return (
                    <div className="meal-suggestion--item" key={index}>
                        <span className="meal-suggestion--item__title"></span>
                        <button className="meal-suggestion--item__title">Add</button>
                    </div>
                )
            })}*/}
            <SugItem className="meal-suggestion--item">
                <span className="meal-suggestion--item__title">{meals.meal1}</span>
                <button className="meal-suggestion--item__button">Add</button>
            </SugItem>
            <SugItem className="meal-suggestion--item">
                <span className="meal-suggestion--item__title">{meals.meal2}</span>
                <button className="meal-suggestion--item__button">Add</button>
            </SugItem>
            <SugItem className="meal-suggestion--item">
                <span className="meal-suggestion--item__title">{meals.meal3}</span>
                <button className="meal-suggestion--item__button">Add</button>
            </SugItem>
        </div>
    </MealSuggContainer>
  )
}

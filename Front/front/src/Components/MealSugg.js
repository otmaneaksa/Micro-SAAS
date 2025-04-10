import React, { useState, useEffect } from 'react'

export default function MealSugg() {
const [meals, setMeals] = useState({
    meal1:'',
    meal2:'',
    meal3:''
}
)
  return (
    <> 
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
            <div className="meal-suggestion--item">
                <span className="meal-suggestion--item__title">{meals.meal1}</span>
                <button className="meal-suggestion--item__button">Add</button>
            </div>
            <div className="meal-suggestion--item">
                <span className="meal-suggestion--item__title">{meals.meal2}</span>
                <button className="meal-suggestion--item__button">Add</button>
            </div>
            <div className="meal-suggestion--item">
                <span className="meal-suggestion--item__title">{meals.meal3}</span>
                <button className="meal-suggestion--item__button">Add</button>
            </div>
        </div>
    </>
  )
}

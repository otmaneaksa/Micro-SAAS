import React, { useState, useEffect} from 'react'

export default function WeeklyPlan() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [meals, setMeals] = useState([]);
    const [meal, setMeal] = useState({
      breakfast:'',
      lunch:'',
      dinner:''
    })
    const [loading, setLoading] = useState(true);
    const WeeklyPlanContainer = styled.div`
    border:1px solid withe;
    `;
  return (
    <WeeklyPlanContainer>
        <h2>Weekly Meal Plan</h2>
        <div className="weekly-plan">
          {days.map((day, index) => (
            <div key={index} className="weekly-plan--day-plan">
              <h3 className="weekly-plan--day-plan__day">{day}</h3>
              <button className="weekly-plan--day-plan__btn">Edit</button>
              <div className="weekly-plan--day-plan__meal">
                <h4 className="weekly-plan--day-plan__breakfast">Breakfast</h4>
                <span>{meal.breakfast}</span>
              </div>
              <div className="weekly-plan--day-plan__meal">
                <h4 className="weekly-plan--day-plan__lunch">Lunch</h4>
                <span>{meal.lunch}</span>
              </div>
              <div className="weekly-plan--day-plan__meal">
                <h4 className="weekly-plan--day-plan__dinner">Dinner</h4>
                <span>{meal.dinner}</span>
              </div>
            </div>
          ))}
        </div>
    </WeeklyPlanContainer>
  )
}

import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

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
    border:1px solid white;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.1);
    `;
    const DayPlanHeader = styled.div`
      display: flex;
      justify-content:space-between;
      align-items: center;
      margin-bottom: 10px;`;
    const DayPlan = styled.div`
    background-color:#7AC6D2;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    `;
  return (
    <WeeklyPlanContainer>
        <h2>Weekly Meal Plan</h2>
        <div className="weekly-plan">
          {days.map((day, index) => (
            <DayPlan key={index} className="weekly-plan--day-plan">
              <DayPlanHeader>
                <h3 style={{display:'inline-block'}} className="weekly-plan--day-plan__day">{day}</h3>
                <button className="weekly-plan--day-plan__btn bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Edit</button>
              </DayPlanHeader>
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
            </DayPlan>
          ))}
        </div>
    </WeeklyPlanContainer>
  )
}

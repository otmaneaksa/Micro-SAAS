import React from 'react';
import styled from 'styled-components';
import Regimen from "../assets/images/Regimen.png";

export default function Home() {
  const Welcome = styled.div`
  `;
  const FeaturedMealPlans = styled.div`

  `;
  return (
    <>
      <Welcome>
        <h1>Welcome to MealMaster</h1>
        <h3>Plan your meals effortlessly and enjoy delicious, healthy food every day</h3>
        <button>Get started</button>
      </Welcome>
      <FeaturedMealPlans>
        <h2>Featured Meal Plans</h2>
        <div>
          <div className="meal-plan-card">
            <img src={Regimen} alt="Meal Plan" />
            <h3>Fresh & Healthy</h3>
            <p>Description of Meal Plan 1</p>
            <button>View Details</button>
          </div>
          <div className="meal-plan-card">
            <img src={Regimen} alt="Meal Plan" />
            <h3>Gourmet Delight</h3>
            <p>Description of Meal Plan 2</p>
            <button>View Details</button>
          </div>
          <div className="meal-plan-card">
            <img src={Regimen} alt="Meal Plan" />
            <h3>Breakfast Boost</h3>
            <p>Description of Meal Plan 3</p>
            <button>View Details</button>
          </div>
        </div>
        <div className="latest-recipes">
          <div className="meal-plan-card">
            <img src={Regimen} alt="Meal Plan" />
            <h3>Fresh & Healthy</h3>
            <p>Road recipe</p>
          </div>
          <div className="meal-plan-card">
            <img src={Regimen} alt="Meal Plan" />
            <h3>Gourmet Delight</h3>
            <p>Road recipe</p>
          </div>
          <div className="meal-plan-card">
            <img src={Regimen} alt="Meal Plan" />
            <h3>Breakfast Boost</h3>
            <p>Road recipe</p>
          </div>
          <div className="meal-plan-card">
            <img src={Regimen} alt="Meal Plan" />
            <h3>Breakfast Boost</h3>
            <p>Road recipe</p>
          </div>
        </div>
      </FeaturedMealPlans>
    </>
  )
}

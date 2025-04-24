import React from 'react';
import styled from 'styled-components';
import Regimen from "../assets/images/Regimen.jpg";

export default function Home() {
  const Welcome = styled.div`
  `;
  const FeaturedMealPlans = styled.div`
    img{
      width: 300px;
      height: auto;
      border-radius:10px;
    }
      div.meal-plans-container {
        text-align:left;
        display: flex;
        justify-content: space-around;
        margin-bottom:20px;
        }
      div.meal-plan-card{
        margin-right:20px;
        padding:15px;
        border-radius:5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
  `;
  const LatestRecipes = styled.div`
    img{
      width: 200px;
      height: auto;
      border-radius:10px;
    }
    display: flex;
    justify-content: space-around;
    background-color:#DDE6ED;
    padding:15px 0;
    div.meal-plan-card{
      background-color:white;
      padding:15px;
      border-radius:5px;
    };
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
        <div className="meal-plans-container">
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
      </FeaturedMealPlans>
      <LatestRecipes>
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
        </LatestRecipes>
    </>
  )
}

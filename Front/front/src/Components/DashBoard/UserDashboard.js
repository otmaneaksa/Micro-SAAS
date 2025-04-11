import React from 'react';
import CaloriesPerDay from './CaloriesPerDay';
import CurrentPlan from './CurrentPlan';

const UserDashboard = ({ dietType }) => {
  return (
    <>
      <CaloriesPerDay/>
      <CurrentPlan/>
    </>
  );
};

export default UserDashboard;
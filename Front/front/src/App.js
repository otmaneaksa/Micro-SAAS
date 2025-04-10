import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealPlanner from './Components/MealPlanner';
import GroceryList from './Components/GroceryList';
import UserDashboard from './Components/UserDashboard';
import Settings from './Components/Settings';
import WeeklyPlan from './Components/WeeklyPlan';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*<MealPlanner/>*/}
      <Router>
      <div>
        {/* Menu de navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
            {/*<li>
              <Link to="/settings">DashBoard</Link>
            </li>*/}
            <li>
              <Link to="/weekly-plan">Weekly plan</Link>
            </li>
            <li>
              <Link to="/grocery-list">Grocery List</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/weekly-plan" element={<WeeklyPlan />} />
          <Route path="/grocery-list" element={<GroceryList />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

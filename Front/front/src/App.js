import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealPlanner from './Components/WeeklyPlan/MealPlanner';
import GroceryList from './Components/GroceryList/GroceryList';
import UserDashboard from './Components/DashBoard/UserDashboard';
import Settings from './Components/Settings';
import WeeklyPlan from './Components/WeeklyPlan/WeeklyPlan';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/images/Otmane.JPG'; // Assurez-vous que le chemin est correct

function App() {
  const Nav = styled.nav`
  display:flex;
  `;
  const Ul = styled.ul`
  display: flex;
  list-style:none;
  `;
  const Li = styled.li`
  margin-right: 20px;`;
  const Img = styled.img`
  width:100px;
  height:100px;
  `;
  const Header = styled.header`
  display: flex;
  justify-content:space-between;
  border-bottom:1px solid grey;`;
  const StyledLink = styled(Link)`
  margin-right:20px;
  display:inline-block;
  text-decoration:none;
  font-weight:bold;
  color:black;
  border:1px solid grey;
  padding:10px;
  border-radius:5px;
  &:active, &:hover{
  color:white;
  background-color:blue;
  }
  `;
  //console.log(logo)
  return (
    <div className="App">
      {/*<MealPlanner/>*/}
      <Router>
      <Header>
        {/* Menu de navigation*/}
        <Img src={logo} alt="logo"/>
        {/*<img src="https://via.placeholder.com/150" alt="logo" />*/}
        <Nav>
          <Ul>
            <li>
              <StyledLink to="/" >Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/dashboard">DashBoard</StyledLink>
            </li>
            {/*<li>
              <Link to="/settings">DashBoard</Link>
            </li>*/}
            <li>
              <StyledLink to="/weekly-plan">Weekly plan</StyledLink>
            </li>
            <li>
              <StyledLink to="/grocery-list">Grocery List</StyledLink>
            </li>
            <li>
              <StyledLink to="/settings">Settings</StyledLink>
            </li>
          </Ul>
        </Nav>
      </Header>
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/weekly-plan" element={<MealPlanner />} />
          <Route path="/grocery-list" element={<GroceryList />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;

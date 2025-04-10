import React, { useState } from 'react';
import axios from 'axios';
import GrocerySum from './GrocerySum';

const GroceryList = ({ mealPlan }) => {
  const [groceryTypes, setGroceryTypes] = useState(['Groceries', 'Snacks', 'Drinks', 'Vegetables', 'Fruits']);
  const [groceryItems, setGroceryItems] = useState([{type:'Groceries',name:'Almond Milk'},{type:'Groceries',name:'Chicken Breast'},{type:'Vegetables',name:'Apples'},{type:'Vegetables',name:'Bananas'},{type:'Vegetables',name:'Carrots'}]);
  const [groceryItem, setGroceryItem] = useState({
    type: '',
    name:''
  });
  return (
    <>
      <div className="grocery-header">
        <h2>Grocery List</h2>
        <input type="text" placeholder="search items" className="grocery-search"/>
      </div>
      <GrocerySum/>
      {groceryTypes.map((type, index) => {
        return (
          <div className="grocery-type" key={index}> 
            <h3>{type}</h3>
            {groceryItems.map((item, index) => {
          if(item.type == type){
            return(
              <div className="grocery-type--item" key={index}>
                <input type="checkbox" id={item.name} name={item.name} value={item.name}/>
                <label for={item.name}>{item.name}</label>
              </div>
            )
          }
        })}
          </div>
          )
      })}
    </>
  );
};

export default GroceryList;
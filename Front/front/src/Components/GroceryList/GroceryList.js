import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GrocerySum from './GrocerySum';
import styled from 'styled-components';

const GroceryList = ({ mealPlan }) => {
  const [GroceryTypes, setGroceryTypes] = useState(['Groceries', 'Snacks', 'Drinks', 'Vegetables', 'Fruits']);
  const [NotEmptyTypes, setNotEmptyTypes] = useState([]);
  const [GroceryItems, setGroceryItems] = useState([{type:'Groceries',name:'Almond Milk'},{type:'Groceries',name:'Chicken Breast'},{type:'Vegetables',name:'Apples'},{type:'Vegetables',name:'Bananas'},{type:'Vegetables',name:'Carrots'}]);
  const [groceryItem, setGroceryItem] = useState({
    type: '',
    name:''
  });
  useEffect(() => {
    const NoEmptyTypes = GroceryTypes.filter((type) => {
      return GroceryItems.some((item) => item.type === type);
    })
    setNotEmptyTypes(NoEmptyTypes);
  },[])
  const GroceryHeader = styled.header`
    display: flex;
    justify-content:space-around;
    align-items: center;
  `;
  const Input = styled.input`
  padding:5px;
  border-radius:5px;
  `;
  const GroceryContent = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
  `;
  const GroceyListContainer = styled.div`

  `;
  const GroceryItem = styled.div`
  text-align:left;
  border:1px solid white;
  boerder-radius:5px;
  padding:10px 100px 10px 10px;
  margin:10px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.1);
  `;
  return (
    <>
      <GroceryHeader>
        <h2 style={{display:'inline-block'}}>Grocery List</h2>
        <Input type="text" placeholder="search items" className="grocery-search"/>
      </GroceryHeader>
      <GroceryContent>
        <GroceyListContainer>
          {NotEmptyTypes.map((type, index) => {
        return (
              <GroceryItem className="grocery-type" key={index}> 
                <h3>{type}</h3>
                {GroceryItems.map((item, index) => {
                  if(item.type == type){
                    return(
                      <div className="grocery-type--item" key={index}>
                        <input type="checkbox" id={item.name} name={item.name} value={item.name}/>
                        <label for={item.name}>{item.name}</label>
                      </div>
                    )
                  }
                })}
              </GroceryItem>
              )
          })}
        </GroceyListContainer>
        <GrocerySum/>
      </GroceryContent>
    </>
  );
};

export default GroceryList;
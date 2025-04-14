import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function GrocerySum() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const GrocerySumContainer = styled.div`
  text-align:left;
  border:1px solid white;
  border-radius:5px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.1);
  padding:5px 50px 50px 5px;
  `;
  return (
    <GrocerySumContainer>
        <h3>Summary</h3>
        <p>Total Items: {totalItems}</p>
        <p>Estimated Cost: ${totalCost}</p>
        <button>Generate Shopping List</button>
    </GrocerySumContainer>
  )
}

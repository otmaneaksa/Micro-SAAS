import React, {useState, useEffect} from 'react'

export default function GrocerySum() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  return (
    <>
        <h3>Summary</h3>
        <p>Total Items: {totalItems}</p>
        <p>Estimated Cost: ${totalCost}</p>
        <button>Generate Shopping List</button>
    </>
  )
}

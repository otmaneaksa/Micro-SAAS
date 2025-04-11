import React, { useState } from 'react'

export default function () {
    const [currentPlan, setCurrentPlan] = useState({
        breakfast:'',
        lunch:'',
        dinner:''
    })
    const [time, setTime] = useState({
        breakfast:'',
        lunch:'',
        dinner:''
    })
  return (
    <>
        <h3>Current Plan</h3>
        <div>
            <p><span>Breakfast:{currentPlan.breakfast}</span><span>{time.breakfast}</span></p>
            <p><span>Lunch:{currentPlan.breakfast}</span><span>{time.lunch}</span></p>
            <p><span>Dinner:{currentPlan.breakfast}</span><span>{time.dinner}</span></p>
        </div>
    </>
  )
}

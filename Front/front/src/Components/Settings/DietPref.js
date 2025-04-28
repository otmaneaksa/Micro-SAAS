import React from 'react'

export default function DietPref() {
   const [Regimes, setRegimes] = useState(["Vegan", "Vegetarian", "Pescatarian", "Flexitarian", "Omnivore"]);
   const [Allergies, setAllergies] = useState(["Peanuts", "Tree nuts", "Dairy", "Eggs", "Fish", "Shellfish", "Soy", "Wheat"]);
  return (
    <DietPref>
        <h2>Dietary Preferences</h2>
        <div>
            <h3>Regimes</h3>
            {Regimes.map((regime, index) =>{
                return(
                    <>
                        <input type="checkbox" key={index} id={regime} name={regime} value={regime}/>
                        <label htmlFor={regime}>{regime}</label>
                    </> 
                )
            })}
            <h3>Allergies</h3>
            {
                Allergies.map((allergy, index) =>{
                    return(
                        <>
                            <input type="checkbox" key={index} id={allergy} name={allergy} value={allergy}/>
                            <label htmlFor={allergy}>{allergy}</label>
                        </>
                    )
                })
            }
        </div>
        <div>

        </div>
    </DietPref>
  )
}

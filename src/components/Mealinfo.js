import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
const [info , setInfo] = useState();
    const {mealid} = useParams();
    console.log(mealid);

    useEffect(()=>{
        const getInfo = async() =>{
            const get = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
            const jsonData = await get.json();
            console.log(jsonData.meals[0])
            setInfo(jsonData.meals[0])
        }
        if(mealid != "") {
        getInfo()
        }
    },[mealid])
  
  return (
   <div>
     {
        !info ? "" :
        <div className='mealInfo'>
        <img src={info.strMealThumb}/>
      <div className='info'>
        <h1>Recipe Details</h1>
        <button>{info.strMeal}</button>
        <h3>Instruction's</h3>
        <p>{info.strInstructions}</p>

      </div>
    </div>
    }
   </div>
    
  )
}

export default Mealinfo

import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Mealcards from './Mealcards'
import Todolist from './Todolist'
import Category from './Category';
import Slider from './Slider';

function Mainpage() {
const [data, setData] = useState()
const [search, setSearch] = useState("")
const [msg, setMsg] = useState("")

const handleInput = (event) => {
setSearch(event.target.value)
}
  const myFun = async() =>{
if(search == ""){
  setMsg("Please Enter Somthing")
}else{
  const get = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  const jsonData = await get.json()
  // console.log(jsonData.meals)
  setData(jsonData.meals)
  setMsg("")

}
}

useEffect(()=>{
   const fetchDefaultMeals = async () => {
    try{
      const jeson = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=c`)
      const jesonData = await jeson.json();
      setData(jesonData.meals.slice(0, 15))
    }catch(error){
      console.log("error is coming",error);
    }
    
   };
   fetchDefaultMeals();
},[])
   
  // console.log(data);
  return (
    <>
    <div className='navbar'>
    <div className='head'>FOOD RECIPE APP</div> 
    <div className='todo'>
    <NavLink to="/todo" className='navLink'>TodoList</NavLink>
    </div>
    <div className='todo'>
    <NavLink to="/category" className='navLink'>filter</NavLink>
    </div>

    </div>
 
    <div className='container'>

   <div className='searchBar'>
    <input type='text' placeholder='Enter Dishes' onChange={handleInput} />
    <button onClick={myFun}>Search</button>
   </div>
   <h4 className='msg'>{msg}</h4>
    </div>
     
     <Slider/>

    <div>
      <Mealcards details={data} />
    </div>
    </>
  )
}

export default Mainpage


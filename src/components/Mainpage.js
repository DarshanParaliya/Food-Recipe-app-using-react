import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Mealcards from './Mealcards'
import Todolist from './Todolist'

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

   
  // console.log(data);
  return (
    <>
    <div className='navbar'>
    <div className='head'>FOOD RECIPE APP</div> 
    <div className='todo'>
    <NavLink to="/todo" className='navLink'> Go To TodoList</NavLink>
    </div>

    </div>
 
    <div className='container'>

   <div className='searchBar'>
    <input type='text' placeholder='Enter Dishes' onChange={handleInput} />
    <button onClick={myFun}>Seach</button>
   </div>
   <h4 className='msg'>{msg}</h4>
    </div>
    <div>
      <Mealcards details={data} />
    </div>
    </>
  )
}

export default Mainpage


import React from 'react'
import { useState } from 'react'

function Todolist() {
const[initial, setInitial] = useState();
const[data, setData] = useState([]);

const inputHandle = (event) => {
 setInitial(event.target.value)
}
const getData = () => {
    let store = [...data , initial]
    setData(store)
    setInitial("")
}
const deletData = (id) =>{
   let filterData = data.filter((curItem, index) =>{
    return(
      index != id
    )
   })
   setData(filterData)
}

  return (
    <div className='todobody'>
        <div className='titletodo'>
        <h1>Todolist</h1>
        </div>
        <div className='container2'>
        <div className='inputfield'>
         <input type='text' placeholder='Enter your Task' value={initial} onChange={inputHandle}/>
         <button onClick={getData}>Add</button>
        </div>
            {data.map((curItem, id) => {
   return(
    <div className='taskdata'>
        <p>{curItem}</p>
        <i className="ri-delete-bin-7-fill deleteIcon" onClick={()=> deletData(id)}></i>
     
    </div>
   )
            })}
        </div>
    </div>
  )
}

export default Todolist

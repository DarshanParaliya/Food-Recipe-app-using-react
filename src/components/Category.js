import React, {useState} from 'react'
import Catogory from './Catogory.json'

function Category() {
const [data, setData]= useState(Catogory);
const [inputVal, setInputVal]= useState("");

const selectItem = (event) =>{
    setInputVal(event.target.value)
}
 if(inputVal == "Product A to Z"){
    data.sort((a,b)=>{
        let nameA= a.modelName;
        let nameB= b.modelName;
        if(nameA < nameB){
            return -1;
        }
    })

 }
 if(inputVal == "Product Z to A"){
    data.sort((a,b)=>{
        let nameA= a.modelName;
        let nameB= b.modelName;
        if(nameA > nameB){
            return -1;
        }
    })

 }
 if(inputVal == "Price High to Low"){
    data.sort((a,b)=>{
        return b.price - a.price ;
    })

 }
 if(inputVal == "Price Low to High"){
    data.sort((a,b)=>{
        return a.price - b.price ;
    })

 }

  return (
  
    <div className='product'>
          <div className='cat-container'>
        <label>Category : </label>
        <select onChange={selectItem}>
            <option value="Product A to Z">Product A to Z</option>
            <option value="Product Z to A">Product Z to A</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Price Low to High">Price Low to High</option>
        </select>
        </div>
   <div className='card'>
           {
            Catogory.map((cur) => {
                return(
                <div className='card-detaails'>
                <img src={cur.image}/>
                <div className='text'>
                <p>{cur.modelName}</p>
                <p>₹{cur.price}</p>
                </div>
              </div>
                )
            })
        }   
    </div>
    </div>
 
  )
}

export default Category

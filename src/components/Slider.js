import data from './data.json'
import React ,{ useState , useEffect} from 'react'

const Slider= () => { 
    const [index, setIndex] = useState(0);

    const next = () =>{
       setIndex(index === data.length-1 ? 0 : index+1)
    }

    const pre = () =>{
      setIndex(index ===  0 ? data.length-1 : index-1)
   }

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return (() => {
            clearInterval(interval) ;
         })           
      }, [index])

    
      return(
        <div className='slider-container'>
    
    <i className="ri-arrow-left-wide-line left-btn" onClick={pre}></i>
  <img src={data[index].download_url} alt={data[index].author}/>
    <i className="ri-arrow-right-wide-fill right-btn" onClick={next}></i>
         
         <div className='dots'>
           { data.map((_,i) => ( 
              <span 
              key={i}
              onClick={()=>setIndex(i)}
              className={`dot ${i === index ? "active" : ""}`}
              >

              </span>
              
           ))} 
         </div>
        </div>
      )
  }
  

export default Slider

import data from './data.json'
import React ,{ useState , useEffect, useRef} from 'react'

const Slider= () => { 
    const [next, setNext] = useState(0);
    let ref = useRef(null);


    const handleNext = () =>{
        setNext((previousValue) =>{
           if(previousValue == data.length-1){
            return 0
           }
           return previousValue+1;
           
        })
    }

    const handlePre = () =>{
       if(next == 0){
        setNext(data.length-1)
       }else{
        setNext(next-1)
       }
    }

    useEffect(() => {
        ref.current = setInterval(handleNext, 4000)  
        return (() => {
            clearInterval(ref.current) 
         })           
      }, [])

      const pauseSlider = () =>{
        clearInterval(ref.current)
      }
      const resumeSlider = () =>{
        setInterval(handleNext, 4000);
      }

      return(
        <>
  <div className='slide-container' onMouseEnter={pauseSlider} onMouseLeave={resumeSlider}>
  <i className="ri-arrow-left-wide-fill left-btn" onClick={handlePre}></i>
  <img src={data[next].download_url} />
  <i className="ri-arrow-right-wide-fill right-btn" onClick={handleNext}></i>
  
  </div>
  </>
      )
  }
  

export default Slider

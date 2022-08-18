import { useEffect } from 'react';
import Num from './Num';



const NumPad = () =>{
  
    //onenter

    function onClick(value){
        console.log(value);
    }

    //event listeners here

    useEffect(()=>{
        
    },[])


    return (
        <>
        <div className="flex justify-center mb-1">
        {[1,2,3].map((num) => {
            return(
                <Num key={num} num={num}  onClick={onClick} />
            )
        })}
        </div>

       <div className="flex justify-center mb-1">
        {[4,5,6].map((num) => {
            return(
                <Num key={num} num={num} onClick={onClick}/>
            )
        })}
        </div>

        <div className="flex justify-center mb-1">{[7,8,9].map((num) => {
            return(
                <Num key={num} num={num}  onClick={onClick}/>
            )
        })}
        </div>

       </>

    )
};



export default NumPad;
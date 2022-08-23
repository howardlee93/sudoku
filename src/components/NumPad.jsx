import { useEffect } from 'react';
import Num from './Num';


const NumPad = (props) =>{
  
    //event listeners here


    const onEnter =(e)=>{

    }

    return (
        <div className='float-root '>
            <div className="flex justify-center grid grid-cols-3 gap-1">
            {[1,2,3].map((num) => {
                return(
                    <Num key={num} num={num} handleOnClick={props.handleOnClick} />
                )
            })}
            </div>

            <div className="flex justify-center grid grid-cols-3 gap-1">
            {[4,5,6].map((num) => {
                return(
                    <Num key={num} num={num} handleOnClick={props.handleOnClick}/>
                )
            })}
            </div>

            <div className="flex justify-center grid grid-cols-3 gap-1">
                {[7,8,9].map((num) => {
                    return(
                        <Num key={num} num={num}  handleOnClick={props.handleOnClick}/>
                )
            })}
            </div>
       </div>

    )
};



export default NumPad;
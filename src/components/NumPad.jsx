import { useEffect } from 'react';
import Num from './Num';



const NumPad = () =>{
  
    //onenter

    function handleOnClick(value){
        console.log(value);
    }

    //event listeners here

    useEffect(()=>{

        const eventListener = (event) =>{
            event.preventDefault();
            let key = parseInt(event.key);
            if (isNaN(key)){
                console.log('this is not a number');
                console.log(event.key);
            }else{
                console.log(event.key);
            }
        }
        document.addEventListener("keyup", eventListener);

        //unsubscribe
        return ()=> ( 
            document.removeEventListener("keyup", eventListener)
        )
    },[])


    const onEnter =(e)=>{

    }

    return (
        <div className='float-root '>
            <div className="flex justify-center grid grid-cols-3 gap-1">
            {[1,2,3].map((num) => {
                return(
                    <Num key={num} num={num} handleOnClick={handleOnClick} />
                )
            })}
            </div>

            <div className="flex justify-center grid grid-cols-3 gap-1">
            {[4,5,6].map((num) => {
                return(
                    <Num key={num} num={num} handleOnClick={handleOnClick}/>
                )
            })}
            </div>

            <div className="flex justify-center grid grid-cols-3 gap-1">
                {[7,8,9].map((num) => {
                    return(
                        <Num key={num} num={num}  handleOnClick={handleOnClick}/>
                )
            })}
            </div>
       </div>

    )
};



export default NumPad;
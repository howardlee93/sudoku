import { useState } from 'react';
import '../style/Grid.css';

const Cell = ({num, handleSelectedCell, rowInd, colInd}) =>{

    const [status, setStatus] = useState('')

    const handleClick =()=>{
        handleSelectedCell(num, rowInd, colInd );
        setStatus('current');
    }
    
    let mode;
    switch(status){
        case 'correct':
            mode = 'text-green-400';
            break
        case 'current':
            mode = 'bg-slate-300';
            break;
        case 'past':
            mode = 'text-gray-400';
            break
        default:
            mode = ''
    }
    //some useeffect

    return(
        <div className={`node hover:bg-slate-300 active:bg-slate-700 
            focus:outline-none focus:ring ${mode}`} 
            onClick= {handleClick}>
            <p>{num}</p>
        </div>
    )
}

export default Cell;
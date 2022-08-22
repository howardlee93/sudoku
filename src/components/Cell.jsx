import '../style/Grid.css';
import test from '../util/generate';

const Cell = ({num, status, handleSelectedCell, rowInd, colInd}) =>{

    const handleClick =()=>{
        handleSelectedCell(num);
        console.log(rowInd, colInd, test[rowInd][colInd]);
    }
    // switch(charStatus){
    //     case 'correct':
    //         status = 'text-green-400';
    //         break
    //     // case 'present':
    //     //     status = 'text-yellow-400';
    //     //     break;
    //     // case 'absent':
    //     //     status = 'text-gray-400	';
    //     //     break
    //     default:
    //         status = ''
    // }
    //some useeffect

    return(
        <div className='node' onClick= {handleClick}>
            {/* <input type="text" size="1" value={num} onChange={()=>handleSelectedCell(num)}/> */}
            <p>{num}</p>
        </div>
    )
}

export default Cell;
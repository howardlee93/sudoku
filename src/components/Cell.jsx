import '../style/Grid.css';


const Cell = ({num, status, handleSelectedCell}) =>{


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
        <div className='node'>
            <input type="text" size="1" value={num} onChange={()=>handleSelectedCell(num)}/>
        </div>
    )
}

export default Cell;
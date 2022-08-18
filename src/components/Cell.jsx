import '../style/Grid.css';


const Cell = ({num, status}) =>{

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
            <p>{num}</p>
        </div>
    )
}

export default Cell;
import validate from '../util/sudoku';

function GameActions(props){

    function handleGameEnd(){
        const {game} = props;
        console.log(game);
        if(validate(game)){
            alert('you won!')
        }else{
            alert('there is error!');
        }
    }
    
    return(
        <div className='float-root grid grid-cols-4 gap-0.5 w-1/3'>
            <button  className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
            onClick={()=> props.reset()}>
                New Game
            </button>
            <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' 
                onClick={()=> handleGameEnd()}>
                End game
            </button>
            <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
                onClick={()=>console.log('here is a hint')}>
                Hints
            </button>
            <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
                onClick={()=> console.log('prev move')}>
                Undo last move
            </button>
        </div>
    )
};


export default GameActions;
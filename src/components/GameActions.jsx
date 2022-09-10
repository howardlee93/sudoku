import validate from '../util/sudoku';

function GameActions(props){

    function handleGameEnd(){
        const {game} = props;
        console.log(game);
        if(validate(game)){
            alert('you won!');
            props.reset();
        }else{
            alert('there is error!');
        }
    }
    
    return(
        <div className='float-root grid grid-cols-4 gap-0.5 w-1/3'>
            <button  className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded'
            onClick={()=> props.reset()}>
                New Game
            </button>
            <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded' 
                onClick={()=> handleGameEnd()}>
                Finish
            </button>
            <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded'
                onClick={()=>props.handleHint()}>
                Hints
            </button>
            <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded'
                onClick={()=> props.handleRedo()}>
                Undo
            </button>
        </div>
    )
};


export default GameActions;
import Cell from './Cell';
import '../style/Grid.css';
import { useEffect, useState } from 'react';

const Board = (props) =>{

    const [game, setGame] = useState([]);
    
    useEffect(()=>{
        setGame(props.game);
    },[props.game]);

    const createGrid = (game)=>{
        const grid = [];
        for (let row = 0; row < 9; row ++){
            const currRow = [];
            for (let col = 0; col < 9; col++){
                // currRow.push(" ");
                currRow.push(game[row][col])
            }
            grid.push(currRow);
        };
        return grid;
    };

    return(
        <div className='float-root grid grid-rows-9'>
        {game.length > 0 ? (createGrid(game).map((row, rowInd)=>(
            <div key={rowInd} className='grid grid-cols-9'> 
                {row.map((num, ind)=>(
                    <Cell key={ind} rowInd={rowInd} colInd={ind} num={num} handleSelectedCell={props.handleSelectedCell}/>
                ))}
            </div>
            )
        ))
            :""
        }
        </div>
    )
    
}

export default Board;


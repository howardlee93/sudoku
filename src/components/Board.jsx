import Cell from './Cell';
import '../style/Grid.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Board = (props) =>{

    const [selected, setSelected] = useState("");
    const [game, setGame] = useState(props.game);
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
        {createGrid(game).map((row, rowInd)=>(
            <div key={rowInd} className='grid grid-cols-9'> 
                {row.map((num, ind)=>(
                    <Cell key={ind} rowInd={rowInd} colInd={ind} num={num} handleSelectedCell={props.handleSelectedCell}/>
                ))}
            </div>
            )
        )}
        </div>
    )
    
}

export default Board;


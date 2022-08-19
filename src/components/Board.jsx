import Cell from './Cell';
import '../style/Grid.css';
import test from '../util/generate';
import { useState } from 'react';

const Board = () =>{

    const [selected, setSelected] = useState("");

    const createGrid = (test)=>{
        const grid = [];
        for (let row = 0; row < 9; row ++){
            const currRow = [];
            for (let col = 0; col < 9; col++){
                // currRow.push(" ");
                currRow.push(test[row][col])
            }
            grid.push(currRow);
        };
        return grid;
    };

    const handleSelectedCell = (cell) =>{

        const value = cell === "" ? null : parseInt(cell, 10);
        console.log(value);

        // switch(value){
        //     case value === ".":
        //         //enter num
                
        //         break;
        //     default:
        //         console.log(value)
        //         break;
        // }
    }
    return(
        <div className='float-root'>

        {createGrid(test).map((row, rowInd)=>(
            <div key={rowInd}>
                {row.map((num, ind)=>(
                    <Cell key={ind} num={num} onClick={(num)=> handleSelectedCell(num)}/>
                ))}
            </div>
            )
        )}
        </div>
    )
    
}

export default Board;


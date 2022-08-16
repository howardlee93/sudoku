import Cell from './Cell';
import '../style/Grid.css';

const Board = () =>{

    const createGrid = ()=>{
        const grid = [];
        for (let row = 0; row < 9; row ++){
            const currRow = [];
            for (let col = 0; col < 9; col++){
                currRow.push(row*col);
            }
            grid.push(currRow);
        };
        return grid;
    };

    return(
        <div>

        {createGrid().map((row, rowInd)=>(
            <div id={rowInd}>
                {row.map((num, ind)=>(
                    <Cell key={ind} num={num}/>
                ))}
            </div>
            )
        )}
            



        </div>
    )
    
}

export default Board;


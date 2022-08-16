import Cell from './Cell';

const Board = () =>{



    // const row = [];
    // for (let row = 0; row < 9; row ++){
    //     row.push(i);
    // }

    const createGrid = ()=>{
        const grid = [];
        for (let row = 0; row < 9; row ++){
            let currRow = [];
            for (let col = 0; col < 9; col++){
                currRow.push(1);
            }
            grid.push(currRow);
        };
        return grid;
    };

    return(
        <div>
        {createGrid().map((num, index)=>(
            <Cell key={index} num={num}/>
        ))}
        </div>
    )
    
}

export default Board;
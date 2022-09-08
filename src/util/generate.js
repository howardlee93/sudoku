//test.js
const validate = require ('./sudoku');
// import validate from './sudoku';

const digits = [1,2,3,4,5,6,7,8,9];
const empty = Array(9).fill(null).map(() => Array(9).fill(0));
const difficulty = {
    'easy': 17,
    'medium': 23,
    'hard': 34
}
let counter;

const shuffle = (nums)=>{
    let digitCopy = [...nums];
    for (let i = digitCopy.length - 1; i >= 0; i--){
        let randInd = Math.floor(Math.random() * i +1);
        [digitCopy[i], digitCopy[randInd]] = [digitCopy[randInd], digitCopy[i]]
    }
    return digitCopy;
};

const findNextCell = grid => {
    let emptyCell= {
        i:'',
        j:''
    };
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            let gridCell = grid[i][j];
            if(gridCell === 0){
                console.log(i,j)
                emptyCell.i = i;
                emptyCell.j = j;
                return emptyCell;
            }
        }
    }
    return false;
};   

const fillBoard = (board) =>{
    const cell = findNextCell(board);
    if (!cell) return board;

    for (const num of shuffle(digits)){
        let shallowBoard = board.map(row => row.slice()); // deep copy issue and also do we want to waste memory like this?
        shallowBoard[cell.i][cell.j] = num;
        console.log(shallowBoard);
        counter++;
        if ( counter > 20_000_000 ) throw new Error ("Recursion Timeout");
        if (validate(shallowBoard)){
            board[cell.i][cell.j] = num;
            if (fillBoard(board)) return board;
            board[cell.i][cell.j] = 0;                     
        }
    }
    return false;
};

const pokeHoles = (board, difficulty) =>{
    let removed = [];

    while (removed.length < difficulty){
        let randomRowInd = Math.floor(Math.random()* 8) ;
        let randomColInd = Math.floor(Math.random()* 8);

        //check if that particular combo in array
        if (removed.indexOf({randomRowInd, randomColInd}) === -1){
            board[randomRowInd][randomColInd] = 0;
            removed.push({randomRowInd, randomColInd});
        }
    }
   return board;
}

function init(level = 'easy'){
    counter = 0;
    let solvedBoard = fillBoard(empty);
    let startingBoard = pokeHoles(solvedBoard, difficulty[level] )
    //poke holes 
    console.log( startingBoard);
    return {startingBoard, solvedBoard};

}

// init();
export default init;

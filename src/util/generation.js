//https://dev.to/dsasse07/generating-solving-sudoku-in-js-ruby-with-backtracking-4hm#full-code

// import validate from './sudoku';
const validate = require ('./sudoku');

const digits = [1,2,3,4,5,6,7,8,9];
const empty = Array(9).fill(null).map(() => Array(9).fill(0));
let counter; 

const shuffle = (nums)=>{
    let digitCopy = [...nums];
    for (let i = digitCopy.length - 1; i >= 0; i--){
        let randInd = Math.floor(Math.random() * i +1);
        [digitCopy[i], digitCopy[randInd]] = [digitCopy[randInd], digitCopy[i]]
    }
    return digitCopy;
};

//Obtain an empty 9x9 matrix filled with zeros.
// Scan the matrix for the next cell with a current value of zero.
//use helper to find next empty cell
//place first of shuffled digit
//do so recursively until you have a complete board
//then helper to poke holes

const generate = (board) =>{

    const emptyCell = nextEmpty(board);
    // console.log(emptyCell);
    if (!emptyCell) return board;
   
    for (const num of shuffle(digits)){
        counter++;
        if ( counter > 20_000_000 ) throw new Error ("Recursion Timeout");
        if (checkValid(board, emptyCell, num)){
            board[emptyCell.rowInd][emptyCell.colInd] = num;
            if (generate(board)) return board;
            board[emptyCell.rowInd][emptyCell.colInd] = 0;
        }
    }
    return false;
}

//helper empty
//use hash to remember row and col index
//scan thru array
//find next zero 
const nextEmpty = (board) =>{
    const emptyCell = {rowInd: "", colInd:""};

    board.forEach( (row, rowInd)=>{
        if (emptyCell.colInd !== "") return;
        let firstZero = row.find(col => col === 0);
        if (firstZero === undefined) return;
        emptyCell.rowInd = rowInd;
        emptyCell.colInd = row.indexOf(firstZero);

    });

    if (emptyCell.colInd !=="") return emptyCell;
    return false;
}

//helper poke holes
//randomized range 
const pokeHoles = (board, difficulty) =>{
    const removed = [];

    while (removed.length < difficulty){

        // const val = Math.floor(Math.random() * 81) // Value between 0-81
        const randRow = Math.floor(Math.random()* 8);
        const randCol = Math.floor(Math.random()* 8);

        removed.push({
            rowInd: randRow,
            colIndex: randCol,
            val: board[randRow][randCol]
        });

        board[randRow][randCol] = 0;
        //clone board
        const nextBoard = board.map(row => row.slice());

        //check next
        if (!generate(nextBoard)){
            board[randRow][randCol] = removed.pop().val;
        }

    }
    return [removed, board];
};


const rowSafe = (board, emptyCell, num)=>{
    return board[emptyCell.rowInd].indexOf(num) === -1;
};

const colSafe = (board, emptyCell, num) => {
    return !board.some(row => row[emptyCell.colInd] === num);

};

const subGridCheck = (board, emptyCell, num) =>{
    let subGridStartRow = emptyCell.rowInd - (emptyCell.rowInd % 3);
    let subGridStartCol= emptyCell.colInd - (emptyCell.colInd % 3);
    let safe = true;
    
    for (let boxRow of [0,1,2]){
        for( let boxCol of [0,1,2]){
            if (board[subGridStartRow + boxRow][subGridStartCol + boxCol] === num){
                safe = false;
            }
        }
    };
    return safe;
}

const checkValid =( board, emptyCell, num)=> {
    return rowSafe(board, emptyCell, num)
    && colSafe(board, emptyCell, num) 
    && subGridCheck (board, emptyCell, num)
}

function init(){
    // try{
        counter = 0;
        let solvedBoard = generate(empty);  
        // console.log(solvedBoard)
    // Clone the populated board and poke holes in it. 
    // Stored the removed values for clues
        let [removedVals, startingBoard] = pokeHoles( solvedBoard.map ( row => row.slice() ), 17)
        console.log( [removedVals, startingBoard, solvedBoard, validate(solvedBoard)]);
    // }catch(error){
        // console.log(error);
    // }
};

init();

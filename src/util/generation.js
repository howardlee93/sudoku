//https://dev.to/dsasse07/generating-solving-sudoku-in-js-ruby-with-backtracking-4hm#full-code

const validate = require('./sudoku');
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
    if (!emptyCell) return board;
   
    for (const num of shuffle(digits)){
        counter++;
        let shallowBoard = board.map(row => row.slice());
        shallowBoard[emptyCell.rowInd][emptyCell.colInd] = num;
        // console.log(shallowBoard);
        if ( counter > 20_000_000 ) throw new Error ("Recursion Timeout");
        if (validate(shallowBoard)){
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
const nextEmpty = (grid) =>{
    let emptyCell= {
        rowInd:'',
        colInd:''
    };
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            let gridCell = grid[i][j];
            if(gridCell === 0){
                // console.log(i,j)
                emptyCell.rowInd = i;
                emptyCell.colInd = j;
                return emptyCell;
            }
        }
    }
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



function init(){
    // try{
        counter = 0;
        let solvedBoard = generate(empty);  
        console.log(solvedBoard)
    // Clone the populated board and poke holes in it. 
    // Stored the removed values for clues
        // let [removedVals, startingBoard] = pokeHoles( solvedBoard.map ( row => row.slice() ), 17)
        // return [removedVals, startingBoard, solvedBoard];
        // return startingBoard;

    // }catch(error){
        // console.log(error);
    // }
};

init();

// export default init;

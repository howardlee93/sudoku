//test.js
const validate = require ('./sudoku');

const digits = [1,2,3,4,5,6,7,8,9];
const empty = Array(9).fill(null).map(() => Array(9).fill(0));


const shuffle = (nums)=>{
    let digitCopy = [...nums];
    for (let i = digitCopy.length - 1; i >= 0; i--){
        let randInd = Math.floor(Math.random() * i +1);
        [digitCopy[i], digitCopy[randInd]] = [digitCopy[randInd], digitCopy[i]]
    }
    return digitCopy;
};


const fillBoard = (board) =>{

    for (let i = 0 ; i < board.length; i ++){
        for (let j = 0; j < board[0].length; j++){
            const cell = board[i][j];

            if (cell === 0){
                for (let num in shuffle(digits)){
                    board[cell] = num;
                    let shallowBoard = board.slice();
                    shallowBoard[cell] = num;

                    if (validate(shallowBoard)){
                        board[cell] = num;
                        continue;
                    }
                    board[cell] = 0;
                    fillBoard(board);
                     
                }
            }
        }
    }
    return board;
}

function init(){
    let startingBoard = fillBoard(empty);
    console.log(startingBoard);
    return startingBoard;
}

// init();


// [
//     [
//       0, 1, 9, 0, 8,
//       4, 0, 2, 6
//     ],
//     [
//       6, 0, 0, 1, 9,
//       0, 0, 3, 8
//     ],
//     [
//       8, 0, 0, 2, 3,
//       6, 1, 4, 9
//     ],
//     [
//       2, 6, 1, 7, 5,
//       8, 0, 9, 3
//     ],
//     [
//       7, 3, 5, 0, 4,
//       9, 8, 1, 2
//     ],
//     [
//       0, 4, 8, 3, 0,
//       2, 6, 7, 5
//     ],
//     [
//       4, 7, 6, 9, 2,
//       5, 3, 8, 1
//     ],
//     [
//       1, 8, 2, 4, 0,
//       3, 9, 5, 7
//     ],
//     [
//       5, 9, 3, 8, 7,
//       1, 2, 6, 4
//     ]
//   ]
export default init;

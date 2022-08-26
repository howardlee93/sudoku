const test = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
        [4, 6, 5, 8, 7, 9, 3, 2, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]];

const empty = Array(9).fill(null).map(() => Array(9).fill(0));


const game = [];        
const level = ['easy', 'medium', 'difficult'];


function generate(level){
        const digits ='123456789';
        let numSize = 9;
        let sqrtNum = Math.sqrt(numSize);
        let missingDigits;

        for (let row = 0; row < empty.length; row++){
                for (let col = 0; col< empty[row].length; col++){
                        empty[row][col] = digits[Math.random()*9] 
                }
        }

        

}




export default test;

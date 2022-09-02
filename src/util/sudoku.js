function validate(grid) {

    let rows = [];
    let cols = [];
    let subGrids = [];

    for (let row = 0; row < grid.length; row ++){
        rows.push(checkValid(grid[row]));
    };

    for (let i = 0; i < grid[0].length; i ++){
        let col = [];
        for (let row = 0; row < grid.length; row++){
            let cell = grid[row][i];
            col.push(cell);
        }
        cols.push(checkValid(col))
    }

    for (let subrow = 0;  subrow< grid.length; subrow += 3){
        for (let subcol = 0; subcol < grid[0].length; subcol +=3){
            let sub = [];
            for (let i = subrow; i < subrow +3; i ++){
                for (let j = subcol; j < subcol +3; j++){
                    let cell = grid[i][j];
                    sub.push(cell);
                }
            }
            subGrids.push(checkValid(sub));
        }
    }

    for (let i = 0; i < rows.length; i++){
        if (rows[i] === false || cols[i]  === false || subGrids[i] === false ){
            return false;
        }
    }
    return true;
}


function checkValid(arr){
    if (arr.length !== 9) return false;
    let hash = {};

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0) continue;
        if (!hash[arr[i]]) hash[arr[i]] = 1;
        else return false;
    }

    return true;
}
export default validate;
// module.exports = validate;


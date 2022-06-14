/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) {
        return 0;
    }

    let islandsCount = 0;
    let visited = {};
    let queue = [];

    let rowsCount = grid.length;
    let columnsCount = grid[0].length;
    const bfs = (r, c) => {
        visited[`${r},${c}`] = true;
        queue.push([r, c]);
        while (queue.length) {
            let coordinates = queue.shift();
            let coordinatesRow = coordinates[0];
            let coordinatesColumn = coordinates[1];
            let directions = [[0,1], [0, -1], [1, 0], [-1, 0]];
            for (let direction of directions) {
                let newRow = coordinatesRow + direction[0];
                let newColumn = coordinatesColumn + direction[1];
                if (grid[newRow] && grid[newRow][newColumn] && !visited[`${newRow},${newColumn}`] && grid[newRow][newColumn] === "1") {
                    visited[`${newRow},${newColumn}`] = true;
                    queue.push([newRow, newColumn]);
                }
            }
        }
    }

    for (let row of Array(rowsCount).keys()) {
        for(let column of Array(columnsCount).keys()) {
            if (!visited[`${row},${column}`] && grid[row][column] === "1") {
                bfs(row, column);
                islandsCount++;
            }
        }
    }
    return islandsCount;
}

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
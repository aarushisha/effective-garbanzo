/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid) {
        return 0;
    }
    let rows = grid.length;
    let columns = grid[0].length;
    let visited = new Set();
    let islands = 0;

    let queue = [];
    const bfs = function(r, c) { // not recursive, is iterative
        // use queue, use push to enqueue and shift to dequeue
        visited.add(`${r},${c}`);
        queue.push([r, c]);
        while (queue.length > 0) { // keep expanding island
            let coordinates = queue.shift(); // to make it DFS change this to a pop() to remove the last added
            let row = coordinates[0];
            let column = coordinates[1];
            let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // the 4 directions right, left, down, up
            for (let direction of directions) {
                let r = row + direction[0];
                let c = column + direction[1];
                if ((r) in Array(rows).keys && (c) in Array(columns).keys() && grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                    queue.push([r, c]);
                    visited.add(`${r},${c}`);
                }
            }
        }
    }

    for (let r of Array(rows).keys()) {
        for (let c of Array(columns).keys()) {
            console.log(visited, r, c);
            if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                islands++;
                bfs(r, c);
            }
        }
    }
    return islands;
};

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));
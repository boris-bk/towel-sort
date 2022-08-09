module.exports = function towelSort (matrix) {
    let array = [];
    if(matrix === undefined) return array;
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            array = array.concat(matrix[i])
        }
        else {
            array = array.concat(matrix[i].reverse())
        }
    }
    return array
}

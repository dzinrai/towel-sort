
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if( !matrix || matrix.length === 0 ) return [];
  let new_arr = [];
  for( let i=0; i<matrix.length; i++ ){
    new_arr = i%2!==0 ? new_arr.concat(matrix[i].reverse()) : new_arr.concat(matrix[i]);
  }
  return new_arr;
}

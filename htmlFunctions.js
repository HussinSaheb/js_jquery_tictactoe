// $(function(){
var winningStates = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


// check if the game has been won
function checkWin(array) {
  // assign a boolean
  var win = false;
  // loop over the array of winning states
  for (var i = 0; i < winningStates.length; i++) {
    // add counter
    var count = 0;
    // loop over the each winning state
    for (var j = 0; j < array.length; j++) {
      // check if our winning states elements, has the value
      // of the current item in the arrays
      if (winningStates[i].indexOf(array[j])>= 0) {
      // if it existss in the a win condition
      // increment count
        count++;
      }
      // if the count is 3 or more, it means that
      if (count >= 3) {
        win = true;
        return true;
      }
    }
  }
  return false;
  }

module.exports= {
  checkWin:checkWin
}

// })

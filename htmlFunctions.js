$(function(){
var winningStates = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function checkWin(array) {
  var win = false;
  var count = 0;
  for (var i = 0; i < winningStates.length; i++) {
    count = 0;
    for (var j = 0; j < array.length; j++) {
      if (winningStates[i].indexOf(array[j])>= 0) {
        count++;
      }
      if (count >= 3) {
        win = true;
        return console.log('win');
      }
    }
  }
  return console.log("false");
  }

checkWin([1,4,7]);

})

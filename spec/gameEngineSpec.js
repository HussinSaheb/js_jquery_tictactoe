describe("TicTacToe Game:", function(){

var ticTacToe = require('../htmlFunctions');

  it("should test for a 5 turn win condition  2nd row", function(){
    expect(ticTacToe.checkWin([3,4,5])).toEqual(true);
  })
  it("should test for 5 turn win condition 1st col", function(){
    expect(ticTacToe.checkWin([0,3,6])).toEqual(true);
  })
  it("should test for a 5 turn  win condition diagonal right", function(){
    expect(ticTacToe.checkWin([0,4,8])).toEqual(true);
  })
  it("should test for a 5 turn win condition diagonal left", function(){
    expect(ticTacToe.checkWin([2,4,6])).toEqual(true);
  })
  it("should test for a win condition", function(){
    expect(ticTacToe.checkWin([5, 2, 4, 3])).toEqual(true);
  })
  it("should not return true on a draw state", function(){
    expect(ticTacToe.checkWin([0, 1, 5, 6, 7])).toEqual(false);
  })

})

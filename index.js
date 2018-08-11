$(function(){


  //css for main box
  var boxStyle =  {
    width: "630px",
    height: "630px",
    margin: "auto"
  }
  // set some styling to the squares
  var squareStyle =  {
    display: "inline-block",
    width: "200px",
    height: "200px",
    border: "1px dotted lightgrey",
    padding: "3px"
  }
  var innerSquareStyle =  {
    display: "inline-block",
    width: "200px",
    height: "200px",
    fontSize: "150px",
    color:"white",
    textAlign: "center"
  }
  var containerStyle =  {
    width: "80%",
    height: "80%",
    color:"black",
    textAlign: "center"
  }
  var buttonStyle =  {
    width: "20%",
    height: "10%",
    color:"black",
    textAlign: "center",
    marginBottom:"1%"
  }
  //add main container to body
  $("body").append("<section class='container'></section>");
  // add css to container
  $(".container").css(containerStyle)
  // add h1 to container
  $(".container").append("<h1></h1>");
  // add p tag to container
  $(".container").append("<p id='turn'> </p>");
  // add button to container
  $('.container').append("<button id='reset'  name='reset'>play</button>");
  $('#reset').css(buttonStyle)
  // add a div element to html
  $(".container").append("<div> </div>");
  //add an id to the element
  $("div").attr("id", "box");
  //apply css to box
  $("#box").css(boxStyle);


  // add for loop to generate squares inside the box
  for (var i = 0; i < 9; i++) {
    //add 9 squares to the main div
    $("#box").append("<div></div>");
    // select the divs that are not
    // the div with the id box
    // add to it a class of square
    $("div:not(#box)").attr("class", "square");
  }

  //apply the styles to the square
  $(".square").css(squareStyle);
  // append a div to the squares
  $(".square").append("<div>''</div>");
  // give the divs inside the squeres a new class of innerClass
  $(".square div").attr("class", "innerSquare");
  // style the innersquare with the css for the outer
  $(".innerSquare").css(innerSquareStyle);

  // add a position value to each square.
  // to use them to add to array to check winning states.
  $(".innerSquare").each(function(index){
    $(this).data("pos", index);
  });
  $("#reset").click(function(){
    $(".innerSquare").css({color:"white"});
    $("h1").text("");
    $(".innerSquare").text("''");
    game();
  })
  function game() {
    // create arrays to track the players moves
    var playerOne = [];
    var playerTwo = [];
    //counter to keep track of moves and clicks
    // even count == player one , odd count == player two
    var win = false;
    var count = 0;
    // assign class depending which order the clicks go
    $(".innerSquare").click(function(){
      // if the game isnt won
      if (!win) {
        // check if the the game is a draw
        if ((!checkWin(playerOne) && !checkWin(playerTwo)) && count >= 8) {
          $('h1').text("Draw");
          $("#reset").text("Play Again");
          $("#turn").text("");
        }
        // check if square already played
        if ($(this).text() == "X" || $(this).text() == "O" ) {
          $("#turn").text("tile has already been played");
        }else{
          // check counter if number is odd or even
          if ((count % 2) == 0) {
            // save the move made by playerone to array
            playerOne.push($(this).data("pos"));
            // change the color of the naught to red
            $(this).css({color: "red"});
            $(this).text("O");
            // change the paragraph tag to player two's turn
            $("#turn").text("player two's turn");
            // check if player one Won
            win = checkWin(playerOne);
            if (win) {
              $('h1').text("Player one wins");
              $("#turn").text("");
            }
            // increment count to make odd
            count++;
          }else{
            // player twos turn count == odd
            // have the move done yb player two into array
            playerTwo.push($(this).data("pos"));
            //change the color of the cross to blue
            $(this).css({color: "blue"});
            $(this).text("X");
            // let players know its player one's turn next
            $("#turn").text("player one's turn");
            win = checkWin(playerTwo);
            if (win) {
              $('h1').text("Player two wins");
              $("#turn").text("");
            }
            count++;
          }
        }
      }
    })
  }
  // load game on reload
  game();
  

});

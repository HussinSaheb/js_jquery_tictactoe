$(function(){
  //css for main box
  var boxStyle =  {
    width: "610px",
    height: "610px",
    margin: "auto"
  }
  // set some styling to the squares
  var squareStyle =  {
    display: "inline-block",
    width: "200px",
    height: "200px",
    border: "1px dotted black",
    margin: "auto"
  }
  var innerSquareStyle =  {
    display: "inline-block",
    width: "200px",
    height: "200px",
    margin: "auto"
  }
  // NOTE:  ask rich for help later!!!
  // //css for naught class
  // var naughtStyle = {
  //   backgroundImage: "url('images/circle.png')",
  //   backgroundSize: "cover"
  // }
  // //css for cross class
  // var crossStyle = {
  //   backgroundImage: "url('images/cross.png')",
  //   backgroundSize: "cover",
  //   transform: "rotate(45deg)"
  // }
  // // assign the style object to the classes
  // $(".cross").css(crossStyle);
  // $(".naught").css(naughtStyle);
  //



// add a div element to html
$("body").append("<div></div>");
//add an id to the element
$("div").attr("id", "box");
//apply css to box
$("#box").css(boxStyle);
$("body").append("<p id='turn'></p>");

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
$(".square").append("<div></div>");
// give the divs inside the squeres a new class of innerClass
$(".square div").attr("class", "innerSquare");
// style the innersquare with the css for the outer
$(".innerSquare").css(innerSquareStyle);

// add a position value to each square.
// to use them to add to array to check winning states.
$(".innerSquare").each(function(index){
  $(this).data("pos", index);
});

// create arrays to track the players moves
var playerOne = [];
var playerTwo = [];
//counter to keep track of moves and clicks
// even count == player one , odd count == player two
var count = 0;


function turn() {
  // assign class depending which order the clicks go
  $(".innerSquare").click(function(event){
    // check counter if number is odd or even
    if ((count % 2) == 0) {
      // if even then we let player one go
      // assign the cross to player one
      $(this).toggleClass("cross");
      // save the move made by playerone to array
      playerOne.push($(this).data("pos"));
      // change the paragraph tag to player two's turn
      $("#turn").text("player two's turn");
      // increment count to make odd
      count++;
    }else{
      // player twos turn count == odd
      $(this).toggleClass("naught");
      // ave the move done yb player two into array
      playerTwo.push($(this).data("pos"));
      // let players know its player one's turn next
      $("#turn").text("player one's turn");
      count++;
    }
  })
}
//call the function to play
turn();


});

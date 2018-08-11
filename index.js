$(function(){

// add a div element to html
$("body").append("<div></div>");
//add an id to the element
$("div").attr("id", "box");

var boxStyle =  {
  width: "610px",
  height: "610px",
  margin: "auto"
}
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
// set some styling to the squares
var squareStyle =  {
  display: "inline-block",
  width: "200px",
  height: "200px",
  border: "1px dotted black",
  margin: "auto"
}
//apply the styles to the square
$(".square").css(squareStyle);


// append a div to the squares
$(".square").append("<div></div>");
// give the divs inside the squeres a new class of innerClass
$(".square div").attr("class", "innerSquare");
// style the innersquare with the css for the outer
$(".innerSquare").css(squareStyle);


// assign class naught if player one
// $(".innerSquare").attr("class", "innerSquare naught")
// var naughtStyle = {
//   backgroundImage: "url('images/circle.png')",
//   backgroundSize: "cover"
// }

// assign class cross if player two
// $(".innerSquare").attr("class", "innerSquare cross")
// var crossStyle = {
//   backgroundImage: "url('images/cross.png')",
//   backgroundSize: "cover",
//   transform: "rotate(45deg)"
// }
// $(".cross").css(crossStyle);

});

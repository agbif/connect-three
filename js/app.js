
// var x = document.querySelector(".column-0").addEventListener("click", function(){
//   return "0";
// })

var counter = 0;
document.querySelector(".board").addEventListener("click", function(){
  counter++;
  console.log(counter);
});

document.querySelector(".column-0").addEventListener("click", function(){
  if(document.querySelector(".circle-0-e").hasAttribute("style", "background-color: red;")){
  document.querySelector(".circle-0-f").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-0-d").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-0-e").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-0-c").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-0-d").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-0-b").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-0-c").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-0-a").hasAttribute("style", "background-color: red;"))
{if(counter % 2 === 0 || counter === 0){
  document.querySelector(".circle-0-b").setAttribute("style", "background-color: red;")
}
else{
  document.querySelector(".circle-0-b").setAttribute("style", "background-color: red;")
}
}

});

document.querySelector(".column-1").addEventListener("click", function(){
  if(document.querySelector(".circle-1-e").hasAttribute("style", "background-color: red;")){
  document.querySelector(".circle-1-f").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-1-d").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-1-e").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-1-c").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-1-d").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-1-b").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-1-c").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-1-a").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-1-b").setAttribute("style", "background-color: red;")
}
else
{
  document.querySelector(".circle-1-a").setAttribute("style", "background-color: red;")
}
});


document.querySelector(".column-2").addEventListener("click", function(){
  if(document.querySelector(".circle-2-e").hasAttribute("style", "background-color: red;")){
  document.querySelector(".circle-2-f").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-2-d").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-2-e").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-2-c").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-2-d").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-2-b").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-2-c").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-2-a").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-2-b").setAttribute("style", "background-color: red;")
}
else
{
  document.querySelector(".circle-2-a").setAttribute("style", "background-color: red;")
}
});


document.querySelector(".column-3").addEventListener("click", function(){
  if(document.querySelector(".circle-3-e").hasAttribute("style", "background-color: red;")){
  document.querySelector(".circle-3-f").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-3-d").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-3-e").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-3-c").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-3-d").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-3-b").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-3-c").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-3-a").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-3-b").setAttribute("style", "background-color: red;")
}
else
{
  document.querySelector(".circle-3-a").setAttribute("style", "background-color: red;")
}
});


document.querySelector(".column-4").addEventListener("click", function(){
  if(document.querySelector(".circle-4-e").hasAttribute("style", "background-color: red;")){
  document.querySelector(".circle-4-f").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-4-d").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-4-e").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-4-c").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-4-d").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-4-b").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-4-c").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-4-a").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-4-b").setAttribute("style", "background-color: red;")
}
else
{
  document.querySelector(".circle-4-a").setAttribute("style", "background-color: red;")
}
});


document.querySelector(".column-5").addEventListener("click", function(){
  if(document.querySelector(".circle-5-e").hasAttribute("style", "background-color: red;")){
  document.querySelector(".circle-5-f").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-5-d").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-5-e").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-5-c").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-5-d").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-5-b").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-5-c").setAttribute("style", "background-color: red;")
}
else if(document.querySelector(".circle-5-a").hasAttribute("style", "background-color: red;"))
{
  document.querySelector(".circle-5-b").setAttribute("style", "background-color: red;")
}
else
{
  document.querySelector(".circle-5-a").setAttribute("style", "background-color: red;")
}
});

// document.querySelector(".column-6").addEventListener("click", function(){
//   if(document.querySelector(".circle-6-e").hasAttribute("style", "background-color: red;")){
//   document.querySelector(".circle-6-f").setAttribute("style", "background-color: red;")
// }
// else if(document.querySelector(".circle-6-d").hasAttribute("style", "background-color: red;"))
// {
//   document.querySelector(".circle-6-e").setAttribute("style", "background-color: red;")
// }
// else if(document.querySelector(".circle-6-c").hasAttribute("style", "background-color: red;"))
// {
//   document.querySelector(".circle-6-d").setAttribute("style", "background-color: red;")
// }
// else if(document.querySelector(".circle-6-b").hasAttribute("style", "background-color: red;"))
// {
//   document.querySelector(".circle-6-c").setAttribute("style", "background-color: red;")
// }
// else if(document.querySelector(".circle-6-a").hasAttribute("style", "background-color: red;"))
// {
//   document.querySelector(".circle-6-b").setAttribute("style", "background-color: red;")
// }
// else
// {
//   document.querySelector(".circle-6-a").setAttribute("style", "background-color: red;")
// }
// });





// var myArray1 = new Array(7);
// for(var i=0; i < 7; i++) {
//     myArray1[i] = newArray(7);
// }
//
// myArray1[0][0] = 1;
// myArray1[0][1] = 2;
// myArray1[0][2] = 3;
// myArray1[0][3] = 4;
// myArray1[0][4] = 5;
// myArray1[0][5] = 6;
// myArray1[0][6] = 7;
//
// myArray1[1][0] = 8
// myArray1[1][1] = 9
// myArray1[1][3] = 10
// myArray1[1][4] = 11
// myArray1[1][5] = 12
// myArray1[1][6] = 13
// myArray1[1][7] = 14
//
// myArray1[2][0] = 15
// myArray1[2][1] = 16
// myArray1[2][3] = 17
// myArray1[2][4] = 18
// myArray1[2][5] = 19
// myArray1[2][6] = 20
// myArray1[2][7] = 21
//
// myArray1[3][0] = 22
// myArray1[3][1] = 23
// myArray1[3][3] = 24
// myArray1[3][4] = 25
// myArray1[3][5] = 26
// myArray1[3][6] = 27
// myArray1[3][7] = 28
//
// myArray1[4][0] = 29
// myArray1[4][1] = 30
// myArray1[4][3] = 31
// myArray1[4][4] = 32
// myArray1[4][5] = 33
// myArray1[4][6] = 34
// myArray1[4][7] = 35
//
// myArray1[5][0] = 36
// myArray1[5][1] = 37
// myArray1[5][3] = 38
// myArray1[5][4] = 39
// myArray1[5][5] = 40
// myArray1[5][6] = 41
// myArray1[5][7] = 42


//nested for loop to loop through each storage location and retrieve the number
// for(var i=0 ; i<7; i++) {
//   for (var j = 6; j < 6; j++) {
//   }
// }
//
//
//
// const board = [
//   [1,1,1,1,1,1],
//   [1,1,1,1,1,1],
//   [1,1,1,1,1,1],
//   [1,1,1,1,1,1],
//   [1,1,1,1,1,1],
//   [1,1,1,1,1,1],
//   [1,1,1,1,1,1],
// ];
//
// //when a user clicks
// //figure out what column the user clicked in
//
// board[3][5]
//
//
//
//
// <button onclick="myFunction()">Click me</button>


// var x = document.querySelector(".column-0").addEventListener("click", function(){
//   return "0";
// })

var counter = 0;
var color;
// document.querySelector(".board").addEventListener("click", function(){
//   counter++;
//   console.log(counter);
//
// });


function changeGameBoard(){
  //loop through array
  // change board if (plauer = red ) => 1
    // if (plauer = green) => 2
  //make sure it adds to the bottom-up
}


var squares = [
  [0,0,0,0,0,0], // 0
  [0,0,0,0,0,0], // 1
  [0,0,0,0,0,0], // 2
  [0,0,0,0,0,0], // 3
  [0,0,0,0,0,0], // 4
  [0,0,0,0,0,0], // 5
  // [0,0,0,0,0,0],
];

squares[0][5] = 'color';

// 0,5
squares[0][5] = 'red';

squares[0][0] = document.querySelector(".circle-0-a").hasAttribute("style", "background-color: red");


for(var i = 0; i < squares.length; i++) {
  for (var j = 0; j < squares[i].length; j++) {
     var pos = squares[i] + '' + squares[j];
     console.log(pos);

  }
}

document.querySelector(".column-0").addEventListener("click", function(){
  counter++;

  if(counter === 0 || counter % 2 === 0){
     color = "background-color: red;"
  }
  else{
     color = "background-color: green;"
  }




// squares[0][0] = 'color';
  if(document.querySelector(".circle-0-e").hasAttribute("style", color)){
    squares[0][0] = color;
  document.querySelector(".circle-0-f").setAttribute("style", color)
}
else if(document.querySelector(".circle-0-d").hasAttribute("style", color))
{
  squares[1][0] = color;
  document.querySelector(".circle-0-e").setAttribute("style", color)
}
else if(document.querySelector(".circle-0-c").hasAttribute("style", color))
{
  squares[2][0] = color;
  document.querySelector(".circle-0-d").setAttribute("style", color)
}
else if(document.querySelector(".circle-0-b").hasAttribute("style", color))
{
  squares[3][0] = color;
  document.querySelector(".circle-0-c").setAttribute("style", color)
}
else if(document.querySelector(".circle-0-a").hasAttribute("style", color))
{
  squares[4][0] = color;
  document.querySelector(".circle-0-b").setAttribute("style", color)
}
else
{
  squares[5][0] = color;
  document.querySelector(".circle-0-a").setAttribute("style", color)
}
check();
});

document.querySelector(".column-1").addEventListener("click", function(){
  counter++;

  if(counter === 0 || counter % 2 === 0){
     color = "background-color: red;"
  }
  else{
     color = "background-color: green;"
  }

  if(document.querySelector(".circle-1-e").hasAttribute("style", color)){
    squares[0][1] = color;
  document.querySelector(".circle-1-f").setAttribute("style", color)
}
else if(document.querySelector(".circle-1-d").hasAttribute("style", color))
{
  squares[1][1] = color;
  document.querySelector(".circle-1-e").setAttribute("style", color)
}
else if(document.querySelector(".circle-1-c").hasAttribute("style", color))
{
  squares[2][1] = color;
  document.querySelector(".circle-1-d").setAttribute("style", color)
}
else if(document.querySelector(".circle-1-b").hasAttribute("style", color))
{
  document.querySelector(".circle-1-c").setAttribute("style", color)
  squares[3][1] = color;
}
else if(document.querySelector(".circle-1-a").hasAttribute("style", color))
{
  document.querySelector(".circle-1-b").setAttribute("style", color)
  squares[4][1] = color;
}
else
{
  document.querySelector(".circle-1-a").setAttribute("style", color)
  squares[5][1] = color;
}
check();
});


document.querySelector(".column-2").addEventListener("click", function(){
  counter++;

  if(counter === 0 || counter % 2 === 0){
     color = "background-color: red;"
  }
  else{
     color = "background-color: green;"
  }
  if(document.querySelector(".circle-2-e").hasAttribute("style", color)){
    squares[0][2] = color;
  document.querySelector(".circle-2-f").setAttribute("style", color)
}
else if(document.querySelector(".circle-2-d").hasAttribute("style", color))
{
  squares[1][2] = color;
  document.querySelector(".circle-2-e").setAttribute("style", color)
}
else if(document.querySelector(".circle-2-c").hasAttribute("style", color))
{
  squares[2][2] = color;
  document.querySelector(".circle-2-d").setAttribute("style", color)
}
else if(document.querySelector(".circle-2-b").hasAttribute("style", color))
{
  squares[3][2] = color;
  document.querySelector(".circle-2-c").setAttribute("style", color)
}
else if(document.querySelector(".circle-2-a").hasAttribute("style", color))
{
  squares[4][2] = color;
  document.querySelector(".circle-2-b").setAttribute("style", color)
}
else
{
  document.querySelector(".circle-2-a").setAttribute("style", color)
  squares[5][2] = color;
}
check();
});


document.querySelector(".column-3").addEventListener("click", function(){
  counter++;

  if(counter === 0 || counter % 2 === 0){
     color = "background-color: red;"
  }
  else{
     color = "background-color: green;"
  }


  if(document.querySelector(".circle-3-e").hasAttribute("style", color)){
    squares[0][3] = color;
  document.querySelector(".circle-3-f").setAttribute("style", color)
}
else if(document.querySelector(".circle-3-d").hasAttribute("style", color))
{
  squares[1][3] = color;
  document.querySelector(".circle-3-e").setAttribute("style", color)
}
else if(document.querySelector(".circle-3-c").hasAttribute("style", color))
{
  squares[2][3] = color;
  document.querySelector(".circle-3-d").setAttribute("style", color)
}
else if(document.querySelector(".circle-3-b").hasAttribute("style", color))
{
  squares[3][3] = color;
  document.querySelector(".circle-3-c").setAttribute("style", color)
}
else if(document.querySelector(".circle-3-a").hasAttribute("style", color))
{
  squares[4][3] = color;
  document.querySelector(".circle-3-b").setAttribute("style", color)
}
else
{
  document.querySelector(".circle-3-a").setAttribute("style", color)
  squares[5][3] = color;
}
check();
});




document.querySelector(".column-4").addEventListener("click", function(){
  counter++;

  if(counter === 0 || counter % 2 === 0){
     color = "background-color: red;"
  }
  else{
     color = "background-color: green;"
  }
  if(document.querySelector(".circle-4-e").hasAttribute("style", color)){
    squares[0][4] = color;
  document.querySelector(".circle-4-f").setAttribute("style", color)
}
else if(document.querySelector(".circle-4-d").hasAttribute("style", color))
{
  squares[1][4] = color;
  document.querySelector(".circle-4-e").setAttribute("style", color)
}
else if(document.querySelector(".circle-4-c").hasAttribute("style", color))
{
  squares[2][4] = color;
  document.querySelector(".circle-4-d").setAttribute("style", color)
}
else if(document.querySelector(".circle-4-b").hasAttribute("style", color))
{
  squares[3][4] = color;
  document.querySelector(".circle-4-c").setAttribute("style", color)
}
else if(document.querySelector(".circle-4-a").hasAttribute("style", color))
{
  squares[4][4] = color;
  document.querySelector(".circle-4-b").setAttribute("style", color)
}
else
{
  document.querySelector(".circle-4-a").setAttribute("style", color)
  squares[5][4] = color;
}
check();
});




document.querySelector(".column-5").addEventListener("click", function(){
  counter++;

  if(counter === 0 || counter % 2 === 0){
     color = "background-color: red;"
  }
  else{
     color = "background-color: green;"
  }
  if(document.querySelector(".circle-5-e").hasAttribute("style", color)){
    squares[0][5] = color;
  document.querySelector(".circle-5-f").setAttribute("style", color)
}
else if(document.querySelector(".circle-5-d").hasAttribute("style", color))
{
  squares[1][5] = color;
  document.querySelector(".circle-5-e").setAttribute("style", color)
}
else if(document.querySelector(".circle-5-c").hasAttribute("style", color))
{
  squares[2][5] = color;
  document.querySelector(".circle-5-d").setAttribute("style", color)
}
else if(document.querySelector(".circle-5-b").hasAttribute("style", color))
{
  squares[3][5] = color;
  document.querySelector(".circle-5-c").setAttribute("style", color)
}
else if(document.querySelector(".circle-5-a").hasAttribute("style", color))
{
  squares[4][5] = color;
  document.querySelector(".circle-5-b").setAttribute("style", color)
}
else
{
  document.querySelector(".circle-5-a").setAttribute("style", color)
  squares[5][5] = color;
}

check();
});





function check(){
for(var i = 0; i < squares.length; i++){
  for(var j = 0; j<squares.length; j++){
    if(squares[i][j] === 0) {

    }
    else if (squares[i][j] === squares[i][j+1] && squares[i][j] === squares[i][j+2]) {
        console.log('horizontal connect 3 AT (' + i + ', ' + j + ')');
        alert("You win!1");
    }
    else if (squares[i+1] === undefined || squares[i+2] === undefined) {
      continue;
    }
    else if (squares[i][j] === squares[i+1][j] && squares[i][j] === squares[i+2][j]) {
        console.log('vertical connect 3 AT (' + i + ', ' + i + ')');
        alert("You win!3");
    }
    else if (squares[i][j] === squares[i+1][j-1] && squares[i][j] === squares[i+2][j-2]) {
        console.log('diagonal left connect 3 AT (' + i + ', ' + j + ')');
        alert("You win!4");
    }

    else if (squares[i][j] === squares[i+1][j+1] && squares[i][j] === squares[i+2][j+2]) {
        console.log('diagonal right connect 3 AT (' + i + ', ' + j + ')');
        alert("You win!5");
    }
    else {
      console.log("hello")
      document.querySelector(".winner").setAttribute("style", "display: none")
    }
  }
}
}




// document.querySelector(".column-4").addEventListener("click", function(){
//   counter++;
//
//   if(counter === 0 || counter % 4 === 0){
//      color = "background-color: red;"
//   }
//   else{
//      color = "background-color: green;"
//   }
//
//   if(document.querySelector(".circle-4-e").hasAttribute("style", color)){
//     squares[0][4] = color;
//   document.querySelector(".circle-4-f").setAttribute("style", color)
// }
// else if(document.querySelector(".circle-4-d").hasAttribute("style", color))
// {
//     squares[1][4] = color;
//   document.querySelector(".circle-4-e").setAttribute("style", color)
// }
// else if(document.querySelector(".circle-4-c").hasAttribute("style", color))
// {
//     squares[2][4] = color;
//   document.querySelector(".circle-4-d").setAttribute("style", color)
// }
// else if(document.querySelector(".circle-4-b").hasAttribute("style", color))
// {
//     squares[3][4] = color;
//   document.querySelector(".circle-4-c").setAttribute("style", color)
// }
// else if(document.querySelector(".circle-4-a").hasAttribute("style", color))
// {
//     squares[4][4] = color;
//   document.querySelector(".circle-4-b").setAttribute("style", color)
// }
// else
// squares[5][4] = color;
// {
//   document.querySelector(".circle-4-a").setAttribute("style", color)
// }
// });


// document.querySelector(".column-5").addEventListener("click", function(){
//   counter++;
//
//   if(counter === 0 || counter % 2 === 0){
//      color = "background-color: red;"
//   }
//   else{
//      color = "background-color: green;"
//   }


//   if(document.querySelector(".circle-5-e").hasAttribute("style", color)){
//       squares[0][5] = color;
//   document.querySelector(".circle-5-f").setAttribute("style", color)
// }
// else if(document.querySelector(".circle-5-d").hasAttribute("style", color))
// {
//       squares[1][5] = color;
//   document.querySelector(".circle-5-e").setAttribute("style", color)
// }
// else if(document.querySelector(".circle-5-c").hasAttribute("style", color))
// {
//       squares[2][5] = color;
//   document.querySelector(".circle-5-d").setAttribute("style", color)
// }
// else if(document.querySelector(".circle-5-b").hasAttribute("style", color))
// {
//       squares[3][5] = color;
//   document.querySelector(".circle-5-c").setAttribute("style", color)
// }
//     squares[4][5] = color;
// else if(document.querySelector(".circle-5-a").hasAttribute("style", color))
//
// {
//       squares[5][5] = color;
//   document.querySelector(".circle-5-b").setAttribute("style", color)
// }
// else
// {
//   document.querySelector(".circle-5-a").setAttribute("style", color)
// }
// });


// console.log (arr [i][j]);



// var cubes = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9],
// ];
//
// for(var i = 0; i < cubes.length; i++) {
//     var cube = cubes[i];
//     for(var j = 0; j < cube.length; j++) {
//         display("cube[" + i + "][" + j + "] = " + cube[j]);
//     }
// }
//
// var location = [
//  [1, 2, 3, 4, 5, 6],
//  [7, 8, 9, 10, 11, 12],
//  [13, 14, 15, 16, 17, 18],
//  [19, 20, 21, 22, 23, 24],
//  [25, 26, 27, 28, 29, 30],
//  [31, 32, 33, 34, 35, 36],
// ];
//
// for(var i = 0; i < cubes.length; i++) {
//     var location = location[i];
//     for(var j = 0; j < cube.length; j++) {
//         display("cube[" + i + "][" + j + "] = " + cube[j]);
//     }




//
// board[0][1]
// board[][2]


//loop through whole array each time returning value

//first loop through board arrays

//return their position for every time you loop:
  //ie pos: board[0][1]
  //ie pos: board[3][5]

//find the column
  //ie pos: board[0][1] <--- col = [1]

  //ie pos: board[board.length][COL]<-----|
  //go to final row of board (board.length)



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

// board[3][5]
//
//
//
//
// <button onclick="myFunction()">Click me</button>

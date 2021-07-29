// // gameplay
//

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            document.querySelector("#characterGameAvatar").style.left = "20px";
            break;
        case 38:
            document.querySelector("#characterGameAvatar").style.top = "20px";
            break;
        case 39:
            document.querySelector("#characterGameAvatar").style.left = "40px";
            break;
        case 40:
            document.querySelector("#characterGameAvatar").style.top = "40px";
            break;
    }
};



  // function buttons (){
  //   var leftButton = document.getElementById("leftGameButton");
  //   var rightButton = document.getElementById("rightGameButton");
  //   var upButton = document.getElementById("upGameButton");
  //   var downButton = document.getElementById("downGameButton");
  //   var player = document.getElementById("characterGameAvatar")
  // }
  //
  //   leftButton.addEventListener("onclick", function() {
  //     player.style["left"] = parseInt(player.style["left"])- 5  +"px";
  //     leftButton.style["border-radius"]= 15 +"px;";
  //   });
  //   rightButton.addEventListener("onclick", function() {
  //     player.style["left"] = parseInt(player.style["left"])- 5  +"px";
  //     rightButton.style["border-radius"]= 15 +"px;";
  //   });
  //   upButton.addEventListener("onclick", function() {
  //     player.style["left"] = parseInt(player.style["left"])- 5  +"px";
  //     upButton.style["border-radius"]= 15 +"px;";
  //   });
  //   downButton.addEventListener("onclick", function() {
  //     player.style["left"] = parseInt(player.style["left"])- 5  +"px";
  //     downButton.style["border-radius"]= 15 +"px;";
  //   });






//   function gameStart() {
//     var avatar = object.getElementbyId("characterGameAvatar");
//     avatar = getElementById("characterGameAvatar");
//     avatar.style.position = :"relative";
//     avatar.style.top = :"0px";
//     avatar.style.left = :"0px";
//   }
//
// function playerMovement() {
//   var avatar = document.getElementbyId("characterGameAvatar");
//   var left = KeyboardInfo.GetKeyState(Keys.Left);
//
//
//   var right = KeyboardInfo.GetKeyState(Keys.Right);
//   var up = KeyboardInfo.GetKeyState(Keys.Up);
//   var down = KeyboardInfo.GetKeyState(Keys.Down);
//
//   if (left.IsPressed) {
//     avatar.style.left = document.parseInt(avatar.style.left) - 5 + "px";
//   }
//   if (right.IsPressed) {
//     avatar.style.left = document.parseInt(avatar.style.left) + 5 + "px";
//   }
//   if (up.IsPressed) {
//     avatar.style.top = document.parseInt(avatar.style.top) - 5 + "px";
//   }
//   if (down.IsPressed) {
//     avatar.style.top = document.parseInt(avatar.style.top) + 5 + "px";
//   }
//
// }
// var update = function (){
//   playerMovement();
// }
// var oneSecond = 1000;
// setInterval(update, oneSecond);

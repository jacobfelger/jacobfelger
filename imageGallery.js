function expandPic() {
  this.parentElement.classList.remove("reg");
  this.parentElement.classList.add("expanded");
}
var pics = document.getElementsByClassName("pictures");
for (var i = 0; i < pics.length; i++) {
  var currentImage = pics[i];
  currentImage.addEventListener("click", expandPic);
}

function left() {
  var picTrack = this.parentElement.parentElement;
  picTrack.classList.remove("expanded");
  picTrack.classList.add("reg");
  var left = picTrack.parentElement.previousElementSibling.firstElementChild.nextElementSibling;
  left.classList.remove("reg");
  left.classList.add("expanded");
}
var leftPic = document.getElementsByClassName("left");
for (var i = 0; i < leftPic.length; i++) {
  leftPic[i].addEventListener("click", left);
}

function right() {
  var picTrack = this.parentElement.parentElement;
  picTrack.classList.remove("expanded");
  picTrack.classList.add("reg");
  var right = picTrack.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
  right.classList.remove("reg");
  right.classList.add("expanded");
}
var rightPic = document.getElementsByClassName("right");
for (var i = 0; i < rightPic.length; i++) {
  rightPic[i].addEventListener("click", right);
}

function close() {
  var picTrack = this.parentElement.parentElement;
  picTrack.classList.remove("expanded");
  picTrack.classList.add("reg");
}
var closePic = document.getElementsByClassName("close");
for (var i = 0; i < closePic.length; i++) {
  closePic[i].addEventListener("click", close);
}

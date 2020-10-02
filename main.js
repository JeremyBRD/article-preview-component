const sharingButton = document.querySelector(".sharing-btn");
const sharingPannel = document.querySelector(".sharing-pannel");
// const invisibleSquare = document.querySelector(".invisible-square");
// const invisibleElement = document.querySelector(".invisible-element");

sharingButton.addEventListener("click", function(){
  sharingPannel.style.display = 'flex';
  // invisibleSquare.style.display = 'unset';
  // invisibleElement.style.display = 'unset';
});

sharingButton.addEventListener("click", function(){
  sharingPannel.style.display = 'none';
  // invisibleSquare.style.display = 'none';
  // invisibleElement.style.display = 'none';
});

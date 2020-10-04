const sharingButton = document.querySelector(".sharing-btn");
const sharingPannel = document.querySelector(".sharing-pannel");


console.log('coucou');

sharingButton.addEventListener("click", () => {
  sharingPannel.style.display = 'flex';

});

sharingButton.addEventListener("click", () => {
  sharingPannel.style.display = 'none';

});

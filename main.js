const sharingButton = document.querySelector(".sharing-btn");
const sharingPannel = document.querySelector(".sharing-pannel");

sharingButton.addEventListener('mouseover', () => {
  sharingPannel.style.display = 'none';
});

sharingButton.addEventListener("mouseover", () => {
  if (sharingPannel.style.display === 'none') {
    sharingPannel.style.display = 'flex';
  }
});

sharingPannel.addEventListener('mouseleave', () => {
  sharingPannel.style.display = 'none';
});

const displayPannelModileVp = () => {
  if (window.innerWidth <= 900) {
    sharingButton.addEventListener("click", () => {
      if (sharingPannel.style.display === 'none') {
        sharingPannel.style.display = 'flex';
      } else {
        sharingPannel.style.display = 'none';
      }
    });
  }
};

displayPannelModileVp();
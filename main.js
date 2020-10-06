const sharingButton = document.querySelector(".sharing-btn");
const sharingPannel = document.querySelector(".sharing-pannel");
const sharingBtn = document.querySelector(".sharing-btn");

sharingButton.addEventListener('mouseover', () => {
  sharingPannel.style.display = 'none';
});

sharingButton.addEventListener("mouseover", () => {
  if (sharingPannel.style.display === 'none') {
    sharingPannel.style.display = 'flex';
    sharingButton.style.backgroundColor = 'var(--very-dark-grayish-blue)';
    sharingButton.style.color = 'var(--light-grayish-blue)';
  }
});

sharingPannel.addEventListener('mouseleave', () => {
  sharingPannel.style.display = 'none';
  sharingButton.style.backgroundColor = 'var(--light-grayish-blue)';
  sharingButton.style.color = 'var(--very-dark-grayish-blue)';
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
document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll to sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}


window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none";
      }
  }
}
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showNextImage() {
    items[currentIndex].classList.remove('active'); 
    currentIndex = (currentIndex + 1) % items.length; 
    items[currentIndex].classList.add('active'); 

   
    const offset = -currentIndex * 100; 
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}


setInterval(showNextImage, 5000);

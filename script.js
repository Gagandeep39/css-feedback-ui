const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

// Add event listener to ratingsContainer and check if the clicked element is a rating
ratingsContainer.addEventListener('click', function (e) {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerText;
  }
});

// Send the rating to the server
sendBtn.addEventListener('click', function () {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you for rating!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our service.</p>
  `;
});

// Removes the active class from the rating
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

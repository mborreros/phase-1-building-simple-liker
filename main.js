// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const fullHearts = document.querySelectorAll(".activated-heart");
const hearts = document.querySelectorAll('.like-glyph');
const modal = document.getElementById("modal");
const message = document.getElementById("modal-message");

for (let i = 0; i < hearts.length; i++) {
  const heart = hearts[i];
  heart.addEventListener('click', check);

}

function check() {
  const icon = this;
  mimicServerCall()
    .then((response) => {
      if (icon.innerText === FULL_HEART) {
        icon.innertext = EMPTY_HEART;
        icon.classList.remove("activated-heart");
      }
      else {
        icon.innerText = FULL_HEART;
        icon.classList.add("activated-heart");
      }
    })
    .catch((response) => {
      message.innerText = response;
      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 3000);
    })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

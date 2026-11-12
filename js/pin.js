const buttons = document.querySelectorAll(".digit");
const myId = document.querySelectorAll("#id-container span");

let id = "";
/* updating the id bar to whatever number btn is being clicked */

function updateId() {
  /*reset digits in default*/
  idContainer.classList.remove("negative", "positive");
  errorMsg.classList.add("hidden");

  /* ensuring its always empty */
  myId.forEach((number, index) => {
    number.textContent = id[index] || "";

    number.classList.toggle("filled", !!id[index]);
  });
}

/* setting buttons functionality */

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (id.length < 4) {
      id += button.dataset.number;

      updateId();
    }
  });
});

/* Delete button */

const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", function () {
  id = id.slice(0, -1);

  updateId();
});

/* confirmation button and it's errors*/

const errorMsg = document.getElementById("error-msg");
const idContainer = document.getElementById("id-container");
const validId = "8888"; /* demo PIN */

/* The PIN page has two jobs:
   - normal:            log in → progress page
   - "exit" mode (#exit): confirm ending the race → thank-you → home
   The exit pop-up opens this page as pin.html#exit */
const exitMode = window.location.hash === "#exit";
const tyMsg = document.getElementById("tyMsg");
const THANK_YOU_SECONDS = 5;

function showThankYou() {
  tyMsg.hidden = false;

  setTimeout(function () {
    window.location.href = "index.html";
  }, THANK_YOU_SECONDS * 1000);
}

/* in order to get into the profile when clicking confirm*/
document.getElementById("confirm").addEventListener("click", () => {
  if (id === validId) {
    /* to color the number when id is correct */
    errorMsg.classList.add("hidden");

    idContainer.classList.remove("negative");
    idContainer.classList.add("positive");
    if (exitMode) {
      /* ending the race: thank-you message, then back to the home page */
      showThankYou();
    } else {
      /*direct into the existing profile*/
      window.location.href = "progress.html";
    }
  } else {
    // to show error msg
    errorMsg.classList.remove("hidden");

    idContainer.classList.add("negative");
    idContainer.classList.remove("positive");
  }
});

/* the back arrow is now a normal link to index.html (see pin.html) */

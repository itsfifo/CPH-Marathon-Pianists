// =========================================================
// EXIT RACE: "are you sure?" pop-up
// Used on the home page and the progress page.
//
// Flow: Exit race card → this pop-up
//         NO  → closes the pop-up
//         YES → PIN page in "exit" mode (pin.html#exit)
//               → correct PIN → thank-you message → back to home
//       (the PIN and thank-you steps are in js/pin.js)
// =========================================================

const exitPopup = document.getElementById("exitPopup");

function openExitPopUp() {
  exitPopup.hidden = false;
}

function closePopup() {
  exitPopup.hidden = true;
}

// YES: go to the PIN page to confirm with the runner's PIN
function confirmExit() {
  window.location.href = "pin.html#exit";
}

// the Exit race card opens the pop-up instead of following its link
const exitCard = document.getElementById("exit-card");
if (exitCard) {
  exitCard.addEventListener("click", function (event) {
    event.preventDefault();
    openExitPopUp();
  });
}

// yes and no buttons
document.getElementById("yes-btn").addEventListener("click", confirmExit);
document.getElementById("no-btn").addEventListener("click", closePopup);

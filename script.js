// =============================================================
// script.js — this file makes the page INTERACTIVE.
//
// Any line that starts with  //  is a comment: a note for you.
// The browser skips it. You don't need to edit this file to add
// projects — that all happens in index.html.
// =============================================================


// 1) Put the current year in the footer automatically,
//    so you never have to update "© 2026" by hand.
document.getElementById("year").textContent = new Date().getFullYear();


// 2) The filter buttons ("All", "Built with Claude Code", "Built by me").

// Grab every filter button and every project card on the page.
const buttons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

// For each button, listen for a click...
buttons.forEach(function (button) {
  button.addEventListener("click", function () {

    // Which filter was clicked? ("all", "claude", or "me")
    const choice = button.dataset.filter;

    // Highlight only the button that was clicked.
    buttons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    // Show cards that match, hide the rest.
    cards.forEach(function (card) {
      const type = card.dataset.type; // the card's data-type="..."

      // The "Coming soon" card has no type, so it only shows under "All".
      const matches = choice === "all" || type === choice;

      // "hidden" is a style in style.css that makes something disappear.
      card.classList.toggle("hidden", !matches);
    });
  });
});


// 💡 IDEA FOR LATER: you can add your own little experiments below,
//    the same way neal.fun is full of tiny interactive toys.

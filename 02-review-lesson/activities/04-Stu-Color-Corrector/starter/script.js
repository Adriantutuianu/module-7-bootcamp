// JavaScript function that wraps everything
$(document).ready(function () {
  // Array for word colors
  let colorsOfText = [];

  // Target word
  let targetColor;

  // Target word color
  let targetColorOfText;

  // User"s selection
  let userAnswer;

  // Array for words
  const colors = ["brown", "blue", "magenta", "teal", "coral", "black"];

  // This function sets a random color "word" and a random set of colors "visuals"
  function randColor() {
    // Set random word
    var word = Math.floor(Math.random() * colors.length);
    // Set random word color
    var randomWord = colors[word];
    console.log(randomWord);
  }

  // This function creates the actual "game" logic.
  function createColorPicker() {
    // Shuffle color array
    // Push to text color array
    // Shuffle text color array
    // Loop through all colors in the array
    // Create element to hold word
    // Output a word
    // Make word a random color
  }

  // Clear the divs and arrays upon each round.
  function clear() {}

  // Function for resetting colors and setting new colors.
  function reset() {}

  // Get id of element clicked by user
  $("#color-picker").click(function (event) {});

  // Run game
  reset();
});

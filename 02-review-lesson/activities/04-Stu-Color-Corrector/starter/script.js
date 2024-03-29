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
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    $("#rand-target-color").text(targetColor);
    // Set random word color
    targetColorOfText = colors[Math.floor(Math.random() * colors.length)];
    $("#rand-target-color").css("color", targetColorOfText);
  }

  // This function creates the actual "game" logic.
  function createColorPicker() {
    // Shuffle color array
    colors.sort(function () {
      return 0.5 - Math.random();
    });
    // Push to text color array
    for (let i = 0; i < colors.length; i++) {
      colorsOfText.push(colors[i]);
    }
    // Shuffle text color array
    colorsOfText.sort(function () {
      return 0.5 - Math.random();
    });

    // Loop through all colors in the array
    for (let i = 0; i < colors.length; i++) {
      // Create element to hold word
      var holder = document.createElement("li");
      $("#color-picker").append(holder);

      // Output a word
      $(holder).attr("id", colors[i]).text(colors[i]);
      $(holder).css("color", colorsOfText[i]);
      // Make word a random color
    }
  }

  // Clear the divs and arrays upon each round.
  function clear() {
    $("#rand-target-color").empty();
    $("#color-picker").empty();
    colorsOfText = [];
  }

  // Function for resetting colors and setting new colors.
  function reset() {
    clear();
    randColor();
    createColorPicker();
  }

  // Get id of element clicked by user
  $("#color-picker").click(function (event) {
    userAnswer = event.target.id;

    if (userAnswer === targetColorOfText) {
      alert("You win!");
      reset();
    } else {
      alert("Wrong!");
      reset();
    }
  });

  // Run game
  reset();
});

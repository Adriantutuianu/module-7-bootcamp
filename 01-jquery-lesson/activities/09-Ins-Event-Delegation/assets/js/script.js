const displayEl = $('#display');
const showLettersBtnEl = $('#show-letters-btn');
const buttonListEl = $('#buttons');
const clearEl = $('#clear');

// Immediately hide the clear button
clearEl.hide();

function renderLetters() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_'];

  // Dynamically create buttons
  // Use jQuery's .each method to iterate through the letters array.
  $.each(letters, function (i, letter) {
    // Create button
    const letterBtn = $('<button>');
    // Assign style to the button
    letterBtn.addClass('letter-button btn btn-info');
    // Assign the letter to the data-letter attribute
    letterBtn.attr('data-letter', letter);
    // Display the letter
    letterBtn.text(letter);
    // Attach the letter element
    buttonListEl.append(letterBtn);
  })
}

// Delegate event listener to the parent element, <div id="buttons">
buttonListEl.on('click', '.letter-button', function (event) {
  const displayLetterEl = $('<div>');

  displayLetterEl.addClass('letter');

  // get letter from clicked letter button's `data-letter` attribute and use it for display
  displayLetterEl.text($(event.target).attr('data-letter'));
  displayEl.append(displayLetterEl);
});

// Renders the letter buttons on click
showLettersBtnEl.on('click', function () {
  // render letters
  renderLetters();
  // hide show letters button
  showLettersBtnEl.hide();
  // display clear button
  clearEl.show();
});

// Clears the message board of letters on click
clearEl.on('click', function () {
  displayEl.empty();
});

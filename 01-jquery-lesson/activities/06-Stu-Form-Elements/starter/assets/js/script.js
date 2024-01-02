const shoppingFormEl = $("#shopping-form");
const shoppingListEl = $("#shopping-list");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event) {
  event.preventDefault();

  const shoppingItem = $("input[name=shopping-input]").val();

  if (!shoppingItem) {
    console.log("no shopping intem filled out in the form!");
    return;
  }
  // print to the page

  shoppingListEl.append("<li>" + shoppingItem + "</li>");
  //clear the form
  $('input[name="shopping-input"]').val("");
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", handleFormSubmit);

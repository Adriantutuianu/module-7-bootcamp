// Comments show the vanilla JavaScript equivalent statements

// const rootEl = document.getElementById("root");
const rootEl = $('#root');

// const titleEl = document.createElement("h1");
const titleEl = $('<h1>');

// titleEl.textContent = "Hello friends";
titleEl.text('Hello friends');

// titleEl.className = 'fancy';
titleEl.attr('class', 'fancy');

// titleEl.classList.add('p-5') - (`p-5` is for padding)
titleEl.addClass('p-5');

// titleEl.style.border = "rgb(122, 242, 242) 3px solid";
titleEl.css('border', 'rgb(122, 242, 242) 5px solid');

// rootEl.appendChild(titleEl);
rootEl.append(titleEl);

// titleEl.append("Welcome to jQuery");
rootEl.append('<h2>With jQuery we can:</h2>');

const abilities = [
  'Select',
  'Create',
  'Style',
  'Animate',
  'Traverse',
  'Event Listen',
  'much more',
];

for (let i = 0; i < abilities.length; i++) {
  // Create a new `<div>` for each ability and its text content
  const abilityEl = $('<li>');

  // abilityEl.textContent = abilities[i];
  abilityEl.text(abilities[i]);

  // `my-3` class adds margin on top and bottom
  abilityEl.addClass('my-3');

  // Alternatively
  // const abilityEl = $("<div>" + abilities[i] + "</div>");

  // Add this new `<div>` to the abilities `<div>` container element.
  rootEl.append(abilityEl);
}

// select all `<div>` elements on the page
// document.querySelectorAll('div');
console.log($('div'));

// Alternatively use the `$.each` method
// $.each(abilities, function(i, ability) {
//    abilityEl.append("<div>" + ability + "</div>");
// })

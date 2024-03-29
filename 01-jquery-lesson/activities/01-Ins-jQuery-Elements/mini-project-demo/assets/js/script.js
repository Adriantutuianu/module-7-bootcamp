// save reference to important DOM elements
const timeDisplayEl = $('#time-display');
const projectDisplayEl = $('#project-display');
const projectModalEl = $('#project-modal');
const projectFormEl = $('#project-form');
const projectNameInputEl = $('#project-name-input');
const projectTypeInputEl = $('#project-type-input');
const hourlyRateInputEl = $('#hourly-rate-input');
const dueDateInputEl = $('#due-date-input');

// handle displaying the time
function displayTime() {
  const rightNow = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  const projectRowEl = $('<tr>');

  const projectNameTdEl = $('<td>').addClass('p-2').text(name);

  const projectTypeTdEl = $('<td>').addClass('p-2').text(type);

  const rateTdEl = $('<td>').addClass('p-2').text(hourlyRate);

  const dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);

  const daysToDate = dayjs(dueDate).diff(dayjs(), 'days');

  const daysLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);

  const totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate);

  // You can also chain methods onto new lines to keep code clean
  const totalTdEl = $('<td>')
    .addClass('p-2')
    .text('$' + totalEarnings);

  const deleteProjectBtn = $('<td>')
    .addClass('p-2 delete-project-btn text-center')
    .text('X');

  // By listing each `<td>` constiable as an argument, each one will be appended in that order
  projectRowEl.append(
    projectNameTdEl,
    projectTypeTdEl,
    rateTdEl,
    dueDateTdEl,
    daysLeftTdEl,
    totalTdEl,
    deleteProjectBtn
  );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal('hide');
}

function calculateTotalEarnings(rate, days) {
  const dailyTotal = rate * 8;
  const total = dailyTotal * days;
  return total;
}

function handleDeleteProject(event) {
  console.log(event.target);
  const btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

// handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault();

  const projectName = projectNameInputEl.val().trim();
  const projectType = projectTypeInputEl.val().trim();
  const hourlyRate = hourlyRateInputEl.val().trim();
  const dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

projectFormEl.on('submit', handleProjectFormSubmit);
projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1, dateFormat: 'yy/mm/dd' });

setInterval(displayTime, 1000);

// Use Day.js.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
const gradDate = dayjs("2024-03-08").format("MMM D, YYYY");
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2027 be?
var weekDay = dayjs(" 1/1/2027").format("dddd, MMMM D, YYYY");
$("#2a").text(weekDay);

// TODO: 3. What is the difference in days between May 4, 2027 and today?
var today = dayjs();

var targetDay = dayjs("2027-05-04");

var days = targetDay.diff(today, "day");
$("#3a").text(days);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = dayjs().format("HH:mm:ss");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = dayjs().unix();
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = dayjs.unix(1318781876).format("D MMM YYYY, HH:mm:ss");
$("#6a").text(unixFormat);

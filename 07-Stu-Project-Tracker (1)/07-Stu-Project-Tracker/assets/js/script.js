setInterval(function name(params) {
  var dateAndTime = dayjs().format("D MMM YYYY,  HH:mm:ss");
  $("#time-span").text(dateAndTime);
}, 1000);

$("#datepicker").datepicker({
  changeMonth: true,
  changeYear: true,
  dateformat: "dd/mm/y",
  defaultDate: new Date(),
});

setInterval(function name(params) {
  var dateAndTime = dayjs().format("D MMM YYYY, HH:mm:ss");
  console.log(dateAndTime);

  $("#time-span").text(dateAndTime);
}, 1000);

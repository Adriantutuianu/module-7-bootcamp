// JavaScript function that wraps everything
$(document).ready(function () {
  const captainPlanet = $(".captain-planet");
  const clonedCaptainPlanet = $(captainPlanet).clone();

  // Gets Link for Theme Song
  const audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "assets/captainplanet24.mp3");

  // Theme Button
  $(".theme-button").on("click", function () {
    audioElement.play();
  });
  $(".pause-button").on("click", function () {
    audioElement.pause();
  });

  // Size Buttons
  $(".normal-button").on("click", function () {
    captainPlanet.animate({ height: "300px" });
  });
  $(".grow-button").on("click", function () {
    captainPlanet.animate({ height: "500px" });
  });
  $(".shrink-button").on("click", function () {
    captainPlanet.animate({ height: "100px" });
  });

  // Visibility Buttons
  $(".vis-button").on("click", function () {
    captainPlanet.animate({ opacity: "1" });
  });
  $(".invis-button").on("click", function () {
    captainPlanet.animate({ opacity: "0.05" });
  });

  // // Cloning Buttons
  $(".clone-button").on("click", function () {
    clonedCaptainPlanet.appendTo("body").animate({
      position: "absoulte",
      top: "700px",
      height: "150px",
      marginLeft: "800px",
    });
  });
  $(".unclone-button").on("click", function () {
    clonedCaptainPlanet.animate({ opacity: "0" });
  });

  // Move Buttons
  $(".up-button").on("click", function () {
    captainPlanet.animate({ top: "-=200px" }, "normal");
  });
  $(".down-button").on("click", function () {
    captainPlanet.animate({ top: "+=200px" }, "normal");
  });
  $(".left-button").on("click", function () {
    captainPlanet.animate({ left: "-=200px" }, "normal");
  });
  $(".right-button").on("click", function () {
    captainPlanet.animate({ left: "+=200px" }, "normal");
  });
  $(".back-button").on("click", function () {
    captainPlanet.animate({ top: "50px", left: "80px" }, "fast");
  });

  // Keyboard move controls
  $(document).keyup(function (e) {
    switch (e.which) {
      // Move Buttons (Keyboard Down)
      case 40:
        captainPlanet.animate({ top: "+=200px" }, "normal");
        break;

      // Move Buttons (Keyboard Right)
      case 39:
        captainPlanet.animate({ left: "+=200px" }, "normal");
        break;

      // Move Buttons (Keyboard Up)
      case 38:
        captainPlanet.animate({ top: "-=200px" }, "normal");
        break;

      // Move Buttons (Keyboard Left)
      case 37:
        captainPlanet.animate({ left: "-=200px" }, "normal");
        break;

      default:
        break;
    }
  });
});

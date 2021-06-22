// Add navigation bar toggle on smaller devices

$(".toggle-button").click(function () {
  $("#nav-bar").toggleClass("toggle-window");
  $(".nav-list").toggleClass("show");
  $(".sign-in-panel").toggleClass("show");
});

AOS.init();


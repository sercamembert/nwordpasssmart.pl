/*let okno = document.getElementById('okno');
let logo = document.getElementById('logo');
let firstPlan = document.getElementById('first');
let secoundPlan = document.getElementById('secound');
logo.addEventListener('mouseover', (event) => {
    okno.classList.add("window");
    firstPlan.classList.add("move");
    secoundPlan.classList.add("move");

    

});*/

$("#logo").hover(function() {
  if ($(window).width() < 768) {
    return 0;
  }
  }, function() {
return 0;
  });

$("#logo").hover(function() {
    $("#okno").addClass("window");
    $("#first").addClass("move");
    $("#secound").addClass("move");
  }, function() {
    $("#okno").removeClass("window");
    $("#first").removeClass("move");
    $("#secound").removeClass("move");
  });
  
  $(".btn").hover(function() {
    $("#okno").addClass("window");
    $("#first").addClass("move");
    $("#secound").addClass("move");
  }, function() {
    $("#okno").removeClass("window");
    $("#first").removeClass("move");
    $("#secound").removeClass("move");
  });


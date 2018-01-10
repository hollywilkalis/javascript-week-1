var Person = require('./../js/scripts.js').personModule;

function ageCalc(birthdate) {
  var now = new Date();
  var past = new Date(birthdate);
  return ((now.getFullYear()) - (past.getFullYear()));
}

//Interface Logic goes here
$(document).ready(function() {
  $("form#age-input").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var birthdate = $("#birthdate").val();
    var userAge = ageCalc(birthdate);
    var ageCalculator = new Person(name, birthdate, userAge);
    var ageInSeconds = (ageCalculator.calculateSeconds(userAge));
    var ageOnMercury = (ageCalculator.mercuryAge(userAge)).toFixed(2);
    var ageOnVenus = (ageCalculator.venusAge(userAge)).toFixed(2);
    var ageOnMars = (ageCalculator.marsAge(userAge)).toFixed(2);
    var ageOnJupiter = (ageCalculator.jupiterAge(userAge)).toFixed(2);

    $("#your-planetary-ages").show();
    $("#name-display").text(name);
    $("#seconds").text(ageInSeconds);
    $("#mercury").text(ageOnMercury);
    $("#venus").text(ageOnVenus);
    $("#mars").text(ageOnMars);
    $("#jupiter").text(ageOnJupiter);

    $('#age-input')[0].reset();
  }); //submit event
});//document ready

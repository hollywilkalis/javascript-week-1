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
    const name = $("#name").val();
    const birthdate = $("#birthdate").val();
    const userAge = ageCalc(birthdate);
    const ageCalculator = new Person(name, birthdate, userAge);
    const ageInSeconds = (ageCalculator.calculateSeconds(userAge));
    const ageOnMercury = (ageCalculator.mercuryAge(userAge)).toFixed(2);
    const ageOnVenus = (ageCalculator.venusAge(userAge)).toFixed(2);
    const ageOnMars = (ageCalculator.marsAge(userAge)).toFixed(2);
    const ageOnJupiter = (ageCalculator.jupiterAge(userAge)).toFixed(2);

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

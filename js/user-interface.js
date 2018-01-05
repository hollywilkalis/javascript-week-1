var Person = require('./../js/scripts.js').personModule;

//Interface Logic goes here
$(document).ready(function() {
  $("form#age-input").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var age = parseInt($("#age").val());
    var ageCalculator = new Person(name, age);
    var ageInSeconds = ageCalculator.calculateSeconds(age);
    var ageOnMercury = ageCalculator.mercuryAge(age);
    var ageOnVenus = ageCalculator.venusAge(age);
    var ageOnMars = ageCalculator.marsAge(age);
    var ageOnJupiter = ageCalculator.jupiterAge(age);
    console.log(ageInSeconds);
    console.log(ageOnMercury);
    console.log(ageOnVenus);
    console.log(ageOnMars);
    console.log(ageOnJupiter);
    $('#age-input')[0].reset();
  }); //submit event
});//document ready

// $(document).ready(function(){
//   $('#time').text(moment());
// });

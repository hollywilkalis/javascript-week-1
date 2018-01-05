var Person = require('./../js/scripts.js').personModule;

//Interface Logic goes here
$(document).ready(function() {
  $("form#age-input").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var age = parseInt($("#age").val());
    var ageCalculator = new Person(name, age);
    var ageInSeconds = (ageCalculator.calculateSeconds(age));
    var ageOnMercury = (ageCalculator.mercuryAge(age)).toFixed(2);
    var ageOnVenus = (ageCalculator.venusAge(age)).toFixed(2);
    var ageOnMars = (ageCalculator.marsAge(age)).toFixed(2);
    var ageOnJupiter = (ageCalculator.jupiterAge(age)).toFixed(2);

    console.log(ageOnMercury);
    
    $("#your-planetary-ages").show();
    $("#name-display").text(name);
    $("#seconds").text(ageInSeconds);
    $("#mercury").text(ageOnMercury);
    $("#venus").text(ageOnVenus);
    $("#mars").text(ageOnMars);
    $("#jupiter").text(ageOnJupiter);

    console.log(name);

    $('#age-input')[0].reset();
  }); //submit event
});//document ready

// $(document).ready(function(){
//   $('#time').text(moment());
// });

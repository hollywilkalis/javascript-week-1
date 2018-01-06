

// var date1 = new Date("7/13/2010");
// var date2 = new Date("12/15/2010");
// var timeDiff = Math.abs(date2.getTime() - date1.getTime());
// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
// alert(diffDays);

$(document).ready(function() {
  $("form#birthdate-input").submit(function(event) {
    event.preventDefault();
    var birthdate = $("#birthdate").val();
    var currentDate = moment().format("MMM Do YY");
    var timeDiff = Math.abs(currentDate - birthdate);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    alert(diffDays);
    $('#birthdate-input')[0].reset();
  }); //submit event
});//document ready

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

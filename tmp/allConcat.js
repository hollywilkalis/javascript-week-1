var Person = require('./../js/scripts.js').personModule;

//Interface Logic goes here
$(document).ready(function() {
  $("form#age-input").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var age = parseInt($("#age").val());
    var ageCalculator = new Person(name, age);
    var ageInSeconds = ageCalculator.calculateSeconds(age);
    console.log(ageInSeconds);
    $('#age-input')[0].reset();
  }); //submit event
});//document ready

$(document).ready(function(){
  $('#time').text(moment());
});

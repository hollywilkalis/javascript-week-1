//Interface Logic goes here
$(document).ready(function() {
  $("form#age-input").submit(function(event) {
    event.preventDefault();
    var age = $("#age").val();
    alert(age);
    $('#age-input')[0].reset();
  }); //submit event
});//document ready


$(document).ready(function() {
  $("form#birthdate-input").submit(function(event) {
    event.preventDefault();
    var birthdate = $("#birthdate").val();
    var currentDate = moment().format("MMM Do YY");
    function calculateDays(startDate,endDate) {
    var start_date = moment(birthdate, 'MMM Do YY');
    var end_date = moment(currentDate, 'MMM Do YY');
    var duration = moment.duration(end_date.diff(start_date));
    var days = duration.asDays();
    return days;
    alert(days);
    }
    $('#birthdate-input')[0].reset();
  }); //submit event
});//document ready

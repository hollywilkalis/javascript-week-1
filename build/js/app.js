(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.calculateSeconds = function(age) {
  var ageInSeconds = this.age * 31536000;
  return ageInSeconds;
};

Person.prototype.mercuryAge = function(age) {
  var ageOnMercury = this.age * .24;
  return ageOnMercury;
};

Person.prototype.venusAge = function(age) {
  var ageOnVenus = this.age * .62;
  return ageOnVenus;
};

Person.prototype.marsAge = function(age) {
  var ageOnMars = this.age * 1.88;
  return ageOnMars;
};

Person.prototype.jupiterAge = function(age) {
  var ageOnJupiter = this.age * 11.86;
  return ageOnJupiter;
};

exports.personModule = Person;

},{}],2:[function(require,module,exports){


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

},{"./../js/scripts.js":1}]},{},[2]);

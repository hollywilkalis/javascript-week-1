(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

//previous code
function Person(name, birthdate, userAge) {
  this.name = name;
  this.birthdate = birthdate;
  this.userAge = userAge;
}

Person.prototype.calculateSeconds = function (userAge) {
  var ageInSeconds = this.userAge * 31536000;
  return ageInSeconds;
};

Person.prototype.mercuryAge = function (userAge) {
  var ageOnMercury = this.userAge * .24;
  return ageOnMercury;
};

Person.prototype.venusAge = function (userAge) {
  var ageOnVenus = this.userAge * .62;
  return ageOnVenus;
};

Person.prototype.marsAge = function (userAge) {
  var ageOnMars = this.userAge * 1.88;
  return ageOnMars;
};

Person.prototype.jupiterAge = function (userAge) {
  var ageOnJupiter = this.userAge * 11.86;
  return ageOnJupiter;
};

exports.personModule = Person;

// var now = new Date();
// var past = new Date(this.birthday);
// var nowYear = now.getFullYear();
// var pastYear = past.getFullYear();
// var userAge = nowYear - pastYear;
// return userAge;

},{}],2:[function(require,module,exports){
"use strict";

var Person = require('./../js/scripts.js').personModule;

function ageCalc(birthdate) {
  var now = new Date();
  var past = new Date(birthdate);
  return now.getFullYear() - past.getFullYear();
}

//Interface Logic goes here
$(document).ready(function () {
  $("form#age-input").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    // var age = parseInt($("#age").val());
    var birthdate = $("#birthdate").val();
    var userAge = ageCalc(birthdate);
    var ageCalculator = new Person(name, birthdate, userAge);
    var ageInSeconds = ageCalculator.calculateSeconds(userAge);
    var ageOnMercury = ageCalculator.mercuryAge(userAge).toFixed(2);
    var ageOnVenus = ageCalculator.venusAge(userAge).toFixed(2);
    var ageOnMars = ageCalculator.marsAge(userAge).toFixed(2);
    var ageOnJupiter = ageCalculator.jupiterAge(userAge).toFixed(2);

    $("#your-planetary-ages").show();
    $("#name-display").text(name);
    $("#seconds").text(ageInSeconds);
    $("#mercury").text(ageOnMercury);
    $("#venus").text(ageOnVenus);
    $("#mars").text(ageOnMars);
    $("#jupiter").text(ageOnJupiter);

    $('#age-input')[0].reset();
  }); //submit event
}); //document ready

},{"./../js/scripts.js":1}]},{},[2]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.calculateSeconds = function(age) {
  var ageInSeconds = this.age * 31536000;
  return ageInSeconds;
};

exports.personModule = Person;

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":1}]},{},[2]);

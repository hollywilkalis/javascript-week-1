
//previous code
function Person(name, birthdate, userAge) {
  this.name = name;
  this.birthdate = birthdate;
  this.userAge = userAge;
}

Person.prototype.calculateSeconds = function(userAge) {
  var ageInSeconds = this.userAge * 31536000;
  return ageInSeconds;
};

Person.prototype.mercuryAge = function(userAge) {
  var ageOnMercury = this.userAge * .24;
  return ageOnMercury;
};

Person.prototype.venusAge = function(userAge) {
  var ageOnVenus = this.userAge * .62;
  return ageOnVenus;
};

Person.prototype.marsAge = function(userAge) {
  var ageOnMars = this.userAge * 1.88;
  return ageOnMars;
};

Person.prototype.jupiterAge = function(userAge) {
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

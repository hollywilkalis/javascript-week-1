

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

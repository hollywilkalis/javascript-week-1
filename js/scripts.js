
//previous code
function Person(name, birthdate, userAge) {
  this.name = name;
  this.birthdate = birthdate;
  this.userAge = userAge;
}

Person.prototype.calculateSeconds = function(userAge) {
  let ageInSeconds = this.userAge * 31536000;
  return ageInSeconds;
};

Person.prototype.mercuryAge = function(userAge) {
  let ageOnMercury = this.userAge * .24;
  return ageOnMercury;
};

Person.prototype.venusAge = function(userAge) {
  let ageOnVenus = this.userAge * .62;
  return ageOnVenus;
};

Person.prototype.marsAge = function(userAge) {
  let ageOnMars = this.userAge * 1.88;
  return ageOnMars;
};

Person.prototype.jupiterAge = function(userAge) {
  let ageOnJupiter = this.userAge * 11.86;
  return ageOnJupiter;
};



exports.personModule = Person;

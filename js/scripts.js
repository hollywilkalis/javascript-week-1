function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.calculateSeconds = function(age) {
  var ageInSeconds = this.age * 31536000;
  return ageInSeconds;
};

exports.personModule = Person;

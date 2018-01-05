var Person = require('./../js/scripts.js').personModule;

describe('Person', function() {
  it('should test whether the input age is being received and stored', function() {
    var person = new Person("Holly",10)
    expect(person.age).toEqual(10)
    expect(person.age).not.toEqual(11)
  });
});

describe('Person', function() {
  it('should test whether the input age is being correctly converted from years to seconds', function() {
    var person = new Person("Holly",10)
    expect(person.calculateSeconds()).toEqual(315360000);
    expect(person.calculateSeconds()).not.toEqual(315360100);
  });
});

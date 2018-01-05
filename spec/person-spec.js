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

describe('Person', function() {
  it('should test whether the input age is being correctly converted for Mercury, Venus, Mars, and Jupiter', function() {
    var person = new Person("Holly",10)
    //testing reflects rounding of ages to two decimal places
    expect(person.mercuryAge()).toEqual(2.40);
    expect(person.mercuryAge()).not.toEqual(2.41);
    expect(person.venusAge()).toEqual(6.2);
    expect(person.venusAge()).not.toEqual(2.5);
    expect(person.marsAge()).toEqual(18.799999999999997);
    expect(person.marsAge()).not.toEqual(19);
    expect(person.jupiterAge()).toEqual(118.6);
    expect(person.jupiterAge()).not.toEqual(120);
  });
});

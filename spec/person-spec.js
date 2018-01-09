var Person = require('./../js/scripts.js').personModule;

describe('Person', function() {
  var testUser;
  beforeEach(function() {
    testUser = new Person("Holly", "01/26/1974", 44);
  });

  it('should test whether the age is being correctly calculated based on the birthday provided by the user', function() {
    expect(testUser.userAge).toEqual(44)
    expect(testUser.userAge).not.toEqual(46)
  });

  it('should test whether the age of the user is converted from years to seconds', function() {
    expect(testUser.calculateSeconds()).toEqual(1387584000);
    expect(testUser.calculateSeconds()).not.toEqual(1387584100);
  });

  it('should test whether the age of the user is being correctly converted to the corresponding age for Mercury, Venus, Mars, and Jupiter', function() {
    //testing reflects rounding of ages to two decimal places
    expect(testUser.mercuryAge()).toEqual(10.559999999999999);
    expect(testUser.mercuryAge()).not.toEqual(11);
    expect(testUser.venusAge()).toEqual(27.28);
    expect(testUser.venusAge()).not.toEqual(27);
    expect(testUser.marsAge()).toEqual(82.72);
    expect(testUser.marsAge()).not.toEqual(84);
    expect(testUser.jupiterAge()).toEqual(521.8399999999999);
    expect(testUser.jupiterAge()).not.toEqual(500);
  });
});

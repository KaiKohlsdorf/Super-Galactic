import Galactic from './../src/Super-Galactic.js';

describe('Galactic', () => {
//where 1 equals human and 2 equals not human
  test('should create galactic constructor with age and human properties equal to input', () => {
    const galactic = new Galactic(39, 1);
    expect(galactic.age).toEqual(39);
    expect(galactic.human).toEqual(1);
  })
})
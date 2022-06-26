import Human from '../src/super.js';

describe('Human', () => {
  test('should create an object with age and expectancy properties equal to input', () => {
    const human = new Human (39, 79);
    expect(human.age).toEqual(39);
    expect(human.expectantAge).toEqual(79);
  })
})
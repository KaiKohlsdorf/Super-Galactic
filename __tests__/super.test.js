import Human from '../src/super.js';

describe('Human', () => {

  let human;
  
  beforeEach(() => {
    human = new Human(39, 79);
  })

  test('should show how beforeEach() works', () => {
    console.log(human);
  });
  
  test('should create an object with age and expectancy properties equal to input', () => {
    const human = new Human (39, 79);
    expect(human.age).toEqual(39);
    expect(human.expectantAge).toEqual(79);
  })

  test('should return age on planet Mercury', () => {
    expect(human.ageMercury()).toEqual(9.36);
  });

  test('should return age on planet Venus', () => {
    expect(human.ageVenus()).toEqual(24.18);
  });
    
  test('should return age on planet Mars', () => {
    expect(human.ageMars()).toEqual(73.32);
  });

  test('should return age on planet Jupiter', () => {
    expect(human.ageJupiter()).toEqual(462.54);
  });
  
})
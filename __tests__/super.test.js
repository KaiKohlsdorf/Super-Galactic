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
    expect(human.ageJupiter()).toEqual(462.53999999999996);
  });

  test('should return number of years left to live on Earth', () => {
    expect(human.earthLeft()).toEqual(40);
  })

  test('should return number of years left to live on Mercury', () => {
    expect(human.mercuryLeft()).toEqual(9.6);
  });
  
  test('should return number of years left to live on Venus',
  () => {
    expect(human.venusLeft()).toEqual(24.8);
  });

  test('should return number of years left to live on Mars',
  () => {
    expect(human.marsLeft()).toEqual(75.19999999999999);
  });
})
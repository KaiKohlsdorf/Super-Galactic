import Human from '../src/super.js';

describe('Human', () => {

  let human;
  let older;
  
  beforeEach(() => {
    human = new Human(39, 79);
    older = new Human(80, 79);
  })
  
  test('should create an object with age and expectancy properties equal to input', () => {
    const human = new Human (39, 79);
    const older = new Human (80, 79);
    expect(human.age).toEqual(39);
    expect(human.expectantAge).toEqual(79);
    expect(older.age).toEqual(80);
    expect(older.expectantAge).toEqual(79);
  })

  test('should return age on planet Mercury', () => {
    expect(human.ageMercury()).toEqual(162.5);
  });

  test('should return age on planet Venus', () => {
    expect(human.ageVenus()).toEqual(62.903225806451616);
  });
    
  test('should return age on planet Mars', () => {
    expect(human.ageMars()).toEqual(20.74468085106383);
  });

  test('should return age on planet Jupiter', () => {
    expect(human.ageJupiter()).toEqual(3.288364249578415);
  });

  test('should return number of years left to live on Earth', () => {
    expect(human.earthLeft()).toEqual(40);
    expect(older.earthLeft()).toEqual(1);
  })

  test('should return number of years left to live on Mercury', () => {
    expect(human.mercuryLeft()).toEqual(166.66666666666669);
    expect(older.mercuryLeft()).toEqual(4.166666666666667);
  });
  
  test('should return number of years left to live on Venus',
  () => {
    expect(human.venusLeft()).toEqual(64.51612903225806);
    expect(older.venusLeft()).toEqual(1.6129032258064517);
  });

  test('should return number of years left to live on Mars',
  () => {
    expect(human.marsLeft()).toEqual(21.27659574468085);
    expect(older.marsLeft()).toEqual(0.5319148936170213);
  });

  test('should return number of years left to live on Jupiter',
  () => {
    expect(human.jupiterLeft()).toEqual(3.3726812816188874);
    expect(older.jupiterLeft()).toEqual(0.08431703204047218);
  });
})
import Human from '../src/super.js';

describe('Human', () => {

  let reusableHuman;
  
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
    expect(human.ageMercury()).toEqual(9);
  })

    
  
})
export default class Human {
  constructor(age, expectantAge) {
  this.age = age;
  this.expectantAge = expectantAge; 
  }

  checkType() {
    return "I can't answer that yet!" 
  }

  ageMercury() {
    this.age = (this.age * .24);
    return this.age;
  }

}
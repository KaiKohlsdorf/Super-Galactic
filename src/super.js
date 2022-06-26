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

  ageVenus() {
    this.age = (this.age * .62);
    return this.age;
  }

  ageMars() {
    this.age = (this.age * 1.88);
    return this.age;
  }

  ageJupiter() {
    this.age = (this.age * 11.86);
    return this.age;
  }
}
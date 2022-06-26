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

  earthLeft() {
    if (this.expectantAge >= this.age) {
      return (this.expectantAge - this.age);
    } else {
      return (this.age - this.expectantAge);
    }
  }

  mercuryLeft() {
    if (this.expectantAge >= this.age) {
      return ((this.expectantAge - this.age) * .24);
    } else {
      return ((this.age - this.expectantAge) * .24);
    }
  }

  venusLeft() {
    if (this.expectantAge >= this.age) {
      return ((this.expectantAge - this.age) * .62);
    } else {
      return ((this.age - this.expectantAge) * .24);
    }
  }

  marsLeft() {
    if (this.expectantAge >= this.age) {
      return ((this.expectantAge - this.age) * 1.88);
    } else {
      return ((this.age - this.expectantAge) * 1.88);
    }
  }

  jupiterLeft() {
    if (this.expectantAge >= this.age) {
      return ((this.expectantAge - this.age) * 11.86);
    } else {
      return ((this.age - this.expectantAge) * 11.86);
    }
  }
}
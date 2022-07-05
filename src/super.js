export default class Human {
  constructor(age, expectantAge) {
  this.age = age;
  this.expectantAge = expectantAge; 
  }

  ageMercury() {
    return (this.age / .24);
  }

  ageVenus() {
    return (this.age / .62);
  }

  ageMars() {
    return (this.age / 1.88);
  }

  ageJupiter() {
    return (this.age / 11.86);
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
      return ((this.expectantAge - this.age) / .24);
    } else {
      return ((this.age - this.expectantAge) / .24);
    }
  }

  venusLeft() {
    if (this.expectantAge >= this.age) {
      return ((this.expectantAge - this.age) / .62);
    } else {
      return ((this.age - this.expectantAge) / .62);
    }
  }

  marsLeft() {
    if (this.expectantAge >= this.age) {
      return ((this.expectantAge - this.age) / 1.88);
    } else {
      return ((this.age - this.expectantAge) / 1.88);
    }
  }

  jupiterLeft() {
    if (this.expectantAge >= this.age) {
      return ((this.expectantAge - this.age) / 11.86);
    } else {
      return ((this.age - this.expectantAge) / 11.86);
    }
  }
}


export default function Human(age, expectantAge) {
  this.age = age;
  this.expectantAge = expectantAge;
}

Human.prototype.checkType = function() {
  return "I can't answer that yet!"
}




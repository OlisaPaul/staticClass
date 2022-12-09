class StaticPropMethod {
  constructor(name) {
    this.name = name;
  }

  // We define a static property / method using the static keyword followed by the method / property definition like in line 7-10
  // Static method
  static divideFirstBySecond(a, b) {
    return a / b;
  }

  // Static properties
  static specialization = "Maths";
}

// A static method can only be accesed using the class
// We use the dot notation to do that like in line 15 and 16.
console.log(StaticPropMethod.divideFirstBySecond(15, 3));
console.log(StaticPropMethod.specialization);

// create a calculator instance using es6

export class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  static add() {
    return this.a + this.b;
  }
  static subtract() {
    return this.a - this.b;
  }

  static multiply() {
    return this.a * this.b;
  }
  static divide() {
    return this.a / this.b;
  }
  static modulus() {
    return this.a % this.b;
  }
  static pow() {
    return Math.pow(this.a, this.b);
  }
}

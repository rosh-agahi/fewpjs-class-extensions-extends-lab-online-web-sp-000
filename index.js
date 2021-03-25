// Your code here
class Polygon {
  constructor(sideLengths) {
  this.sideLengths = sideLengths;
  }
  
  get countSides() {
    return this.sideLengths.length;
  }
  
  get perimeter() {
    return this.sideLengths.reduce((a, b) => a + b);
  }
}

class Triange extends Polygon {
}
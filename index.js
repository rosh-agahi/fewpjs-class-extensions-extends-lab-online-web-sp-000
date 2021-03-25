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

class Triangle extends Polygon {
  get valid() {
    if (this.countSides === 3 && 
    sideLengths[0] + sideLengths[1] > sideLengths[2] &&
    sideLengths[1] + sideLengths[2] > sideLengths[0] &&
    sideLengths[2] + sideLengths[0] > sideLengths[1]) {
      return true 
    }
    else { 
      return false }
  
  }
}

class Square extends Polygon {
  get area() {
    return (this.sideLengths[0])**2;
  }
}
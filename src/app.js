class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(a,b,c, angleA, angleB, angleC) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleC = angleC;
    }
    
    isTriangleRectangular () {
        if(a > b && a > c) {
        return (this.a * this.a) + (this.b * this.b) === (this.c * this.c);
        } else if(b > a && b > c) {
        return (this.b * this.b) + (this.c * this.c) === (this.a * this.a);
        }

        return Math.pow(c, 2) + Math.pow(a, 2) === Math.pow(b, 2);
    }

    isTriangleIsocele() {
        return this.a === this.b || this.b === this.c || this.a === this.c;
    }

    isTriangleEquilateral() {
        return this.a === this.b && this.b === this.c;
    }

    isTriangle() {
        this.angleA + this.angleB + this.angleC === 180;
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}


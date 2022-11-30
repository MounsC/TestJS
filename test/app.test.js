const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

// Same test for a triangle
describe('Testing the Triangle Functions', function() {
    it('1. Check if a triangle is rectangle', function(done) {
        let t1 = new Triangle(2, 3, 5);
        expect(t1.isTriangleRectangular()).to.equal(true);
        done();
    });

    it('2. Check if a triangle is isoceles', function(done) {
        let t2 = new Triangle(2, 2, 2);
        expect(t2.isTriangleIsosceles()).to.equal(true);
        done();
    });

    it('3. Check if a triangle is equilateral', function(done) {
        let t3 = new Triangle(2, 2, 2);
        expect(t3.isTriangleEquilateral()).to.equal(true);
        done();
    });

    it('4. Check if a triangle is a triangle', function(done) {
        let t4 = new Triangle(2, 2, 2);
        expect(t4.isTriangle()).to.equal(true);
        done();
    });
});
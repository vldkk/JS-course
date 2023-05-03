(function () {
    class Circle {
        constructor(centerCoordinate, radius) {
            this.centerCoordinate = centerCoordinate;
            this.radius = radius;
        }
        get circleLength() {
            return (2 * Math.PI * this.radius).toFixed(2);
        }
        static getCircleLength(radius) {
            return (2 * Math.PI * radius).toFixed(2);
        }
        get circleObject() {
            return Object.assign({}, this);
        }
        static getCircleObject(centerCoordinate, radius) {
            return new Circle(centerCoordinate, radius);
        }
        isPointInCircle(xPoint, yPoint, xCenter, yCenter, radius) {
            let distance = Math.sqrt(Math.pow(xPoint - xCenter, 2) + Math.pow(yPoint - yCenter, 2));
            return distance <= radius;
        }
        changeToString() {
            const stateObject = Object.entries(this).map(([key, value]) => `${key}: ${value}`);
            return stateObject.toString();
        }
    }
    let myCircle = new Circle('5; 0', 3);

    console.log(myCircle.circleLength);
    console.log(Circle.getCircleLength(3));
    console.log(myCircle.circleObject);
    console.log(Circle.getCircleObject('3; 2', 7));
    console.log(myCircle.isPointInCircle(2, 0, 0, 0, 4));
    console.log(myCircle.changeToString());



})();
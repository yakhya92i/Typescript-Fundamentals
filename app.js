var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Engine started");
    };
    return Car;
}());
var MyCar = new Car("Mercedes", "G63s AMG////", 2024);
MyCar.start();

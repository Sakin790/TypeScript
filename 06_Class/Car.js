var car = /** @class */ (function () {
    // contrcuction ekta function jeta value={peramiter} niye propertis er modde add kore
    function car(brandName, modelName, batteryName) {
        //this is propertis
        this.brand = brandName;
        this.model = modelName;
        this.battery = batteryName;
    }
    car.prototype.carInfo = function () {
        console.log("Car name is ".concat(this.brand, " and model ").concat(this.model, " battery \n    power ").concat(this.battery));
    };
    return car;
}());
var car1 = new car("CyberCar", 634235, "90v");
car1.carInfo();

class car {
  brand: string;
  model: number;
  battery: string;

  // contrcuction elta function jeta value niye propertis er modde add kore
  constructor(brandName: string, modelName: number, batteryName: string) {
    //this is propertis
    this.brand = brandName;
    this.model = modelName;
    this.battery = batteryName;
  }

  carInfo(): void {
    console.log(`Car name is ${this.brand} and model ${this.model} battery 
    power ${this.battery}`);
  }
}

let car1 = new car("CyberCar", 634235, "90v");
car1.carInfo()

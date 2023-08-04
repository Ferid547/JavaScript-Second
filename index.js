//! Task 1 //
class Car {
    constructor (make, model, year, color, motor, fuelCapacity, fuelConsumption) {
        this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.motor = motor,
        this.fuelCapacity = fuelCapacity,
        this.fuelConsumption = fuelConsumption;
    }
    checkFuel = function () {
        let fuelConsumption = 9; 
        let fuel = prompt("How will you pump a liter of gasoline ?");
        
        let distance = ((100/fuelConsumption)*fuel+"km");
        console.log(distance);
    }
}
const car = new Car ("Ford", "Fusion", 2015, "white", "1.5t", "52l", 9);
console.log(car);
car.checkFuel();





//! Task 2 //
const number = prompt("Ədəd daxil edin: ");
number % 2 == 0 ? 
console.log("Cüt ədəddir"): 
console.log("Tək ədəddir");
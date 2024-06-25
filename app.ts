interface Vehicle {
    make: string,
    model: string,
    year: number,
    start: () => void
}

class Car implements Vehicle {
    constructor(public make : string, public model : string, public year : number) {}
        start() : void {
        console.log("Engine started");
    }
}

const MyCar: Vehicle = new Car("Mercedes", "G63s AMG////", 2024);
MyCar.start();

class Vehicle063 {
    run: number;
}

function kmToMiles<T extends Vehicle063>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle
}

class LCV extends Vehicle063 {
    capacity: number;
}

const vehicle = kmToMiles(new Vehicle063())
const lcv = kmToMiles(new LCV())

function logId<T extends string | number, Y>(id: T, data: Y): {id: T, data: Y} {
    return ({
        id,
        data
    })
}
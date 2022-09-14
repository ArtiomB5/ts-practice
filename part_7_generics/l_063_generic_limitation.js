"use strict";
class Vehicle063 {
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicle063 {
}
const vehicle = kmToMiles(new Vehicle063());
const lcv = kmToMiles(new LCV());
function logId(id, data) {
    return ({
        id,
        data
    });
}

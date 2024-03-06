//just making this as a template change anything you want 

//trying to import cars and employees class, not working 
var Employees = require('./Employees')
var Cars = require('./Cars')

class Admins {
    constructor(username, password, location) {
        //constructor 
        this.usernameA = username; //check in database to ensure username & password are unqiue
        this.passwordA = password; //this has to go through a hash func before getting here
        this.locationA = location;
    }
    AddCar;
    DeleteCar;
    EditCar;
    AddEmployee;
    DeleteEmployee;
    EditEmployeeLocation;
    AddAdmin;
    DeleteAdmin;
    EditAdmins;
    ViewReservation;
    ViewUpcomingReservations;
    ApproveClientRequest;
    CreateClientAccount;
}

Admins.prototype.AddCar = function(carArray, type, location, mileage, dayCost, mileCost, status, availability) {
    carArray.push(Cars(type, location, mileage, dayCost, mileCost, status, availability));
}

Admins.prototype.DeleteCar = function(carArray, type, location, mileage, dayCost, mileCost, status, availability) {
    //not sure how to differentiate between cars 
    const info = [type, location, mileage, dayCost, mileCost, status, availability];
    for (let i = 0; i < carArray.length; i++){
        if(carArray[i].GetInfo == info){
            delete carArray[i];
        }
    }
}

Admins.prototype.EditCar = function(type, location, mileage, dayCost, mileCost, status, availability) {
    //not sure how to differentiate between cars 
}

Admins.prototype.AddEmployee = function(username, password, location) {
    //if location is not assgined make it default to "not specified"
    Employees(username, password, location);
}

Admins.prototype.DeleteEmployee = function(username) {
    //search in firebase for employee then delete that info 
}

Admins.prototype.EditEmployeeLocation = function(username, location) {
    //find and get the employee with that specific username
    Employees(location, username);    
}

Admins.prototype.AddAdmin = function(username, password, location) {
    Admins(username, password, location);
}

Admins.prototype.DeleteAdmin = function(username) {

}

Admins.prototype.EditAdmin = function(username, password, location) {

}

Admins.prototype.ViewReservation = function(location, time, clientName) {
    //sees specific reservation
}

Admins.prototype.ViewUpcomingReservation = function(location, time) {
    //sees all upcoming reservations
    //time = current date?
}

//this will not show up on the website
//only used when they are booking over the phone 
Admins.prototype.ApproveClientRequest = function(location, time, clientName, car, clientEmail, password) {
    //if client does not already have an account create one using CreateClientAccount w/ email and password
}

Admins.prototype.CreateClientAccount = function(location, time, clientName) {
    //create client account if they don't have one when they first submit a reservation
}


module.export = Admins;
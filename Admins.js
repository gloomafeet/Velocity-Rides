//just making this as a template change anything you want 

class Admins {
    constructor() {
        //constructor 
        this.usernameA = "";
        this.passwordA = "";
        this.locationA = "";
    }
    AddCar;
    DeleteCar;
    EditCar;
    ViewAllCars;
    AddEmployee;
    DeleteEmployee;
    EditEmployee;
    AddAdmin;
    DeleteAdmin;
    EditAdmins;
    ViewReservation;
    ViewUpcomingReservations;
    ApproveClientRequest;
    CreateClientAccount;
}

Admins.prototype.AddCar = function(type, location, mileage, dayCost, mileCost, status, availability) {

}

Admins.prototype.DeleteCar = function(type, location, mileage, dayCost, mileCost, status, availability) {
    //not sure how to differentiate between cars 
}

Admins.prototype.EditCar = function(type, location, mileage, dayCost, mileCost, status, availability) {
    //not sure how to differentiate between cars 
}

Admins.prototype.ViewAllCars = function() {
    //not sure if this func is needed but just to ensure we remeber this functionality 
}

Admins.prototype.AddEmployee = function(username, password, location) {
    //if location is not assgined make it default to "not specified"
}

Admins.prototype.DeleteEmployee = function(username) {

}

Admins.prototype.EditEmployee = function(username, password, location) {
    //if location is not assgined make it default to "not specified"
}

Admins.prototype.AddAdmin = function(username, password, location) {

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
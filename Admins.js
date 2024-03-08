//just making this as a template change anything you want 

//trying to import cars and employees class, not working 
var Employees = require('./Employees')
var Cars = require('./Cars')
var Customers = require('./Customers')

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
    GetAdminUsername;
    AddAdmin;
    DeleteAdmin;
    EditAdminUsername;
    EditAdminLocation;
    EditAdminsPassword;
    ViewReservation;
    ViewUpcomingReservations;
    ApproveClientRequest;
    CreateClientAccount;
}

Admins.prototype.AddCar = function(carArray, type, location, mileage, dayCost, mileCost, status, availability) {
    carArray.push(Cars(type, location, mileage, dayCost, mileCost, status, availability));
    return carArray; //may not need
}

Admins.prototype.DeleteCar = function(carArray, type, location, mileage, dayCost, mileCost, status, availability) {
    const info = [type, location, mileage, dayCost, mileCost, status, availability];
    for (let i = 0; i < carArray.length; i++){
        if(carArray[i].GetInfo == info){
            delete carArray[i];
            break;
        }
    }
    return carArray; //may not need
}

Admins.prototype.EditCar = function(carArray, type, location, mileage, dayCost, mileCost, status, availability, editedElement, newVal) {
    const info = [type, location, mileage, dayCost, mileCost, status, availability];
    for (let i = 0; i < carArray.length; i++){
        if(carArray[i].GetInfo == info){
            if(editedElement == 'type'){
                carArray[i].EditType(newVal);
            }
            else if(editedElement == 'location'){
                carArray[i].EditLoc(newVal);
            }
            else if(editedElement == 'mileage'){
                carArray[i].EditMile(newVal);
            }
            else if(editedElement == 'dayCost'){
                carArray[i].EditDayCost(newVal);
            }
            else if(editedElement == 'mileCost'){
                carArray[i].EditMileCost(newVal);
            }
            else if(editedElement == 'status'){
                carArray[i].EditStatus(newVal);
            }
            else{
                carArray[i].EditAvailability(newVal);
            }
        }
    }
    return carArray; //may not need
}

Admins.prototype.AddEmployee = function(employeeArray, username, password, location) {
    employeeArray.push(Employees(username, password, location));
    return employeeArray; //may not need
}

Admins.prototype.DeleteEmployee = function(employeeArray, username) {
    for(let i = 0; i < employeeArray.length; i++){
        if(username.equals(employeeArray[i].GetEmployeeUsername)){
            delete employeeArray[i];
        }
    } 
    return employeeArray; //may not need
}

Admins.prototype.EditEmployeeLocation = function(employeeArray, username, location) {
    for(let i = 0; i < employeeArray.length; i++){
        if(username.equals(employeeArray[i].GetEmployeeUsername)){
            employeeArray[i].EditEmployeeLocation(location);
            break;
        }
    }
    return employeeArray; //may not need
}

Admins.prototype.GetAdminUsername = function() {
    return this.usernameA
}

Admins.prototype.AddAdmin = function(adminArray, username, password, location) {
    adminArray.push(Admins(username, password, location));
    return adminArray; //may not need
}

Admins.prototype.DeleteAdmin = function(adminArray, username) {
    for(let i = 0; i < adminArray.length; i++){
        if(username.equals(adminArray[i].GetAdminUsername)){
            delete adminArray[i];
        }
    } 
    return adminArray; //may not need
}

Admins.prototype.EditAdminUsername = function(adminArray, oldUsername, newUsername) {
    for(let i = 0; i < adminArray.length; i++){
        if(oldUsername.equals(adminArray[i].GetAdminUsername)){
            adminArray[i].usernameA = newUsername;
            break;
        }
    }
    return employeeArray; //may not need
}

Admins.prototype.EditAdminPassword = function(adminArray, username, password) {
    for(let i = 0; i < adminArray.length; i++){
        if(username.equals(adminArray[i].GetAdminUsername)){
            adminArray[i].passwordA = password;
            break;
        }
    }
    return employeeArray; //may not need
}

Admins.prototype.EditAdminLocation = function(username, location) {
    for(let i = 0; i < adminArray.length; i++){
        if(username.equals(adminArray[i].GetAdminUsername)){
            adminArray[i].locationA = location;
            break;
        }
    }
    return employeeArray; //may not need
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

Admins.prototype.CreateClientAccount = function(customerArray, clientName, username, password) {
    //create client account if they don't have one when they first submit a reservation
    customerArray.push(Customers(username, password, clientName));
    return customerArray;
}


module.export = Admins;
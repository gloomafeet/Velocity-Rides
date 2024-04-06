import Car from './Car'
import Customer from './Customer'
import User from './User'

// var User = require('./User')
// var Cars = require('./Car')
// var Customers = require('./Customer')

//inherit User functions (trying to at least)

//client username is there email 

class Employee extends User{
    constructor(username, password, name, location){
        super(username, password, name)
        this.location = location;
    }
    getEmployeeUsername;
    editEmployeeUsername;
    editEmployeePassword;
    addCar;
    deleteCar;
    editCar;
    viewReservation;
    viewUpcomingReservations;
    approveClientRequest;
    createClientAccount;
}

Employee.prototype.getEmployeeUsername = function() {
    return this.username;
}

//allow employee to only edit their own info
Employee.prototype.editEmployeeUsername = function(oldUsername, newUsername, password) {
    if(password == this.passwordE && oldUsername == this.usernameE){
        this.usernameE = newUsername;
    }
    this.username = newUsername;
}

Employee.prototype.editEmployeePassword = function(newPassword, oldPassword, username) {
    if(oldPassword.equals(this.passwordE) && username.equals(this.usernameE)){
        this.passwordE = newPassword;
    }
    this.password = newPassword;
}

//edits the location but only admins can use this function!!
Employee.prototype.editEmployeeLocation = function(location) {
    this.location = location;
}

Employee.prototype.addCar = function(carArray, type, location, mileage, dayCost, mileCost, status, availability) {
    carArray.push(Cars(type, location, mileage, dayCost, mileCost, status, availability));
    return carArray; //may not need
}

Employee.prototype.deleteCar = function(carArray, type, location, mileage, dayCost, mileCost, status, availability) {
    const info = [type, location, mileage, dayCost, mileCost, status, availability];
    for (let i = 0; i < carArray.length; i++){
        if(carArray[i].getInfo == info){
            delete carArray[i];
            break;
        }
    }
    return carArray; //may not need
}

Employee.prototype.editCar = function(carArray, type, location, mileage, dayCost, mileCost, status, availability, editedElement, newVal) {
    const info = [type, location, mileage, dayCost, mileCost, status, availability];
    for (let i = 0; i < carArray.length; i++){
        if(carArray[i].getInfo == info){
            if(editedElement == 'type'){
                carArray[i].editType(newVal);
            }
            else if(editedElement == 'location'){
                carArray[i].editLoc(newVal);
            }
            else if(editedElement == 'mileage'){
                carArray[i].editMile(newVal);
            }
            else if(editedElement == 'dayCost'){
                carArray[i].editDayCost(newVal);
            }
            else if(editedElement == 'mileCost'){
                carArray[i].editMileCost(newVal);
            }
            else if(editedElement == 'status'){
                carArray[i].editStatus(newVal);
            }
            else{
                carArray[i].editAvailability(newVal);
            }
        }
    }
    return carArray; //may not need
}

Employee.prototype.viewReservation = function(carAvailabilityMap, location, time, clientName) {
    //sees specific reservation

}

Employee.prototype.viewUpcomingReservation = function(carAvailabilityMap, location, time) {
    //sees all upcoming reservations
    //time = current date?
}

//this will not show up on the website
//only used when they are booking over the phone 
Employee.prototype.approveClientRequest = function(CustomerArray, location, time, clientName, car, clientEmail, password) {
    //if client does not already have an account create one using CreateClientAccount w/ email and password
    let found = false;

    for(let i = 0; i < CustomerArray; i++){
        if(CustomerArray[i].GetCustUsername == clientEmail){
            found = true;
            break;
        }
    }

    if(!found){
        this.createClientAccount(customerArray, clientName, clientEmail, password);
    }

    //find the car in the database
    //if car is not available -> reject automatically
    //else approve 
    
}

Employee.prototype.createClientAccount = function(customerArray, clientName, clientEmail, password) {
    //create client account if they don't have one when they first submit a reservation
    customerArray.push(Customers(clientEmail, password, clientName));
    return customerArray;
}

module.export = Employee;
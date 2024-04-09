import Car from './Car'
import Customer from './Customer'
import User from './User'

// var User = require('./User')
// var Cars = require('./Car')
// var Customers = require('./Customer')

//inherit User functions (trying to at least)

//client username is their email 

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
    addReservation;
    removeReservation;
    checkForClientAccount;
    createClientAccount;
}

Employee.prototype.getEmployeeUsername = function() {
    return this.username;
}

//allow employee to only edit their own info
Employee.prototype.editEmployeeUsername = function(oldUsername, newUsername, password) {
    if(password == this.password && oldUsername == this.username){
        this.username = newUsername;
        return true;
    }
    return false;
}

Employee.prototype.editEmployeePassword = function(newPassword, oldPassword, username) {
    if(oldPassword.equals(this.passwordE) && username.equals(this.usernameE)){
        this.password = newPassword;
        return true;
    }
    return false;
}

//edits the location but only admins can use this function!!
Employee.prototype.editEmployeeLocation = function(location) {
    this.location = location;
    return true;
}

Employee.prototype.addCar = function(carArray, type, location, mileage, dayCost, mileCost, status, availability) {
    carArray.push(Car(type, location, mileage, dayCost, mileCost, status, availability));
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

Employee.prototype.viewReservation = function(carObj, startDate, endDate, startTime, endTime, clientUsername) {
    //sees specific reservation
    carObj.GetAvail().get()
}

Employee.prototype.viewUpcomingReservation = function(carAvailabilityMap, location, time) {
    //sees all upcoming reservations
    //time = current date?
}

//approving clients request online, client has to have an account 
//checking avail should be done before request gets here 
Employee.prototype.addReservation = function(startDate, endDate, startTime, endTime, clientUsername, carObj) {
    carObj.AddReserve(startDate, endDate, startTime, endTime, clientUsername);
}

Employee.prototype.removeReservation = function(startDate, endDate, startTime, endTime, carObj) {
    carObj.RemoveReserve(startDate, endDate, startTime, endTime);
}

Employee.prototype.checkForClientAccount = function(CustomerArray, clientUsername) {
    for(let i = 0; i < CustomerArray; i++){
        if(CustomerArray[i].GetCustUsername == clientUsername){
            return true;
        }
    }
    return false;
}

Employee.prototype.createClientAccount = function(customerArray, clientName, clientEmail, password) {
    //create client account if they don't have one when they first submit a reservation
    customerArray.push(Customer(clientEmail, password, clientName));
    return customerArray;
}

module.export = Employee;
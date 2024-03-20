var User = require('./User')
var Cars = require('./Car')
//inherit User functions (trying to at least)

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
    this.username = newUsername;
}

Employee.prototype.editEmployeePassword = function(newPassword, oldPassword, username) {
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

Employee.prototype.viewReservation = function(location, time, clientName) {
    //sees specific reservation
}

Employee.prototype.viewUpcomingReservation = function(location, time) {
    //sees all upcoming reservations
    //time = current date?
}

//this will not show up on the website
//only used when they are booking over the phone 
Employee.prototype.approveClientRequest = function(location, time, clientName, car, clientEmail, password) {
    //if client does not already have an account create one using CreateClientAccount w/ email and password
}

Employee.prototype.createClientAccount = function(customerArray, clientName, username, password) {
    //create client account if they don't have one when they first submit a reservation
    customerArray.push(Customers(username, password, clientName));
    return customerArray;
}

module.export = Employee;
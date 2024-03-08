var Admins = require('./Admins')
//inherit admins functions (trying to at least)

class Employees extends Admins{
    constructor(username, password, location){
        this.usernameE = username; //check in database to ensure username & password are unqiue 
        this.passwordE = password; //this has to go through a hash func before getting here
        this.locationE = location;
    }
    GetEmployeeUsername;
    EditEmployeeUsername;
    EditEmployeePassword;
    EditEmployeeLocation;
    //inherit other func from admins
}

Employees.prototype.GetEmployeeUsername = function() {
    return this.usernameE;
}

//allow employee to only edit their own info
Employees.prototype.EditEmployeeUsername = function(oldUsername, newUsername, password) {
    this.usernameE = newUsername;
}

Employees.prototype.EditEmployeePassword = function(newPassword, oldPassword, username) {
    this.passwordE = newPassword;
}

//edits the location but only admins can use this function!!
Employees.prototype.EditEmployeeLocation = function(location) {
    this.locationE = location;
}

module.export = Employees;
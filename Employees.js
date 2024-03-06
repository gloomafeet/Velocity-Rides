var Admins = require('./Admins')
//inherit admins functions (trying to at least)

class Employees extends Admins{
    constructor(username, password, location){
        this.usernameE = username; //check in database to ensure username & password are unqiue 
        this.passwordE = password; //this has to go through a hash func before getting here
        this.locationE = location;
    }
    EditEmployeeUsername;
    EditEmployeePassword;
    //inherit other func from admins
}

//allow employee to only edit their own info
Employees.prototype.EditEmployeeUsername = function(oldUsername, newUsername, password) {
    if(password == this.passwordE && oldUsername == this.usernameE){
        this.usernameE = newUsername;
    }
}

Employees.prototype.EditEmployeePassword = function(newPassword, oldPassword, username) {
    if(oldPassword.equals(this.passwordE) && username.equals(this.usernameE)){
        this.passwordE = newPassword;
    }
}

//edits the location but only admins can use this function!!
Employees.prototype.EditEmployeeLocation = function(location, username) {
    if(username.equals(this.usernameE)){
        this.locationE = location;
    }
}

module.export = Employees;
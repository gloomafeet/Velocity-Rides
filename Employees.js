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
Admins.prototype.EditEmployeeUsername = function(oldUsername, newUsername, password) {
    if(password == this.passwordE && oldUsername == this.usernameE){
        this.usernameE = newUsername;
    }
}

Admins.prototype.EditEmployeePassword = function(Newpassword, Oldpassword) {
    if(password == this.passwordE){
        this.usernameE = username;
    }
}

module.export = Employees;
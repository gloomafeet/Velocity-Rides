var Admins = require('./Admins')
//inherit admins functions (trying to at least)

class Employees extends Admins{
    constructor(){
        this.usernameE = "";
        this.passwordE = "";
        this.locationE = "";
    }
    EditEmployee;
    //inherit other func from admins
}

//allow employee to only edit their own info
Admins.prototype.EditEmployee = function(username, password, location) {
    //if location is not assgined make it default to "not specified"
}

module.export = Employees;
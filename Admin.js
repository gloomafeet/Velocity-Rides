var Employee = require('./Employee.js')
var Car = require('./Car.js')
var Customer = require('./Customer.js')
var User = require('./User.js')

class Admin extends Employee{
    constructor(username, password, name, location) {
        //constructor 
        super(username, password, name, location);
    }

    addEmployee;
    deleteEmployee;
    editEmployeeLocation;
    getAdminUsername;
    addAdmin;
    deleteAdmin;
    editAdminUsername;
    editAdminLocation;
    editAdminsPassword;
}

Admin.prototype.addEmployee = function(employeeArray, username, password, location) {
    employeeArray.push(Employee(username, password, location));
    return employeeArray; //may not need
}

Admin.prototype.deleteEmployee = function(employeeArray, username) {
    for(let i = 0; i < employeeArray.length; i++){
        if(username.equals(employeeArray[i].getEmployeeUsername)){
            delete employeeArray[i];
        }
    } 
    return employeeArray; //may not need
}

Admin.prototype.editEmployeeLocation = function(employeeArray, username, location) {
    for(let i = 0; i < employeeArray.length; i++){
        if(username.equals(employeeArray[i].getEmployeeUsername)){
            employeeArray[i].editEmployeeLocation(location);
            break;
        }
    }
    return employeeArray; //may not need
}

Admin.prototype.getAdminUsername = function() {
    return this.username
}

Admin.prototype.addAdmin = function(adminArray, username, password, location) {
    adminArray.push(Admin(username, password, location));
    return adminArray; //may not need
}

Admin.prototype.deleteAdmin = function(adminArray, username) {
    for(let i = 0; i < adminArray.length; i++){
        if(username.equals(adminArray[i].getAdminUsername)){
            delete adminArray[i];
        }
    } 
    return adminArray; //may not need
}

Admin.prototype.editAdminUsername = function(adminArray, oldUsername, newUsername) {
    for(let i = 0; i < adminArray.length; i++){
        if(oldUsername.equals(adminArray[i].getAdminUsername)){
            adminArray[i].username = newUsername;
            break;
        }
    }
    return employeeArray; //may not need
}

Admin.prototype.editAdminPassword = function(adminArray, username, password) {
    for(let i = 0; i < adminArray.length; i++){
        if(username.equals(adminArray[i].getAdminUsername)){
            adminArray[i].password = password;
            break;
        }
    }
    return employeeArray; //may not need
}

Admin.prototype.editAdminLocation = function(username, location) {
    for(let i = 0; i < adminArray.length; i++){
        if(username.equals(adminArray[i].getAdminUsername)){
            adminArray[i].location = location;
            break;
        }
    }
    return employeeArray; //may not need
}



module.exports = Admin;
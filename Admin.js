var Employee = require('./Employee.js')
var Car = require('./Car.js')
var Customer = require('./Customer.js')
var User = require('./User.js')

class Admin extends Employee{
    constructor(username, password, name, location) {
        //constructor 
        super(username, password, name, location);
    }

    addEmployee(employeeArray, username, password, location) {
        employeeArray.push(Employee(username, password, location));
        return employeeArray; //may not need
    }

    deleteEmployee(employeeArray, username) {
        for(let i = 0; i < employeeArray.length; i++){
            if(username.equals(employeeArray[i].getEmployeeUsername)){
                delete employeeArray[i];
            }
        } 
        return employeeArray; //may not need
    }

    editEmployeeLocation(employeeArray, username, location) {
        for(let i = 0; i < employeeArray.length; i++){
            if(username.equals(employeeArray[i].getEmployeeUsername)){
                employeeArray[i].editEmployeeLocation(location);
                break;
            }
        }
        return employeeArray; //may not need
    }

    getAdminUsername() {
        return this.username
    }

    addAdmin(adminArray, username, password, location) {
        adminArray.push(Admin(username, password, location));
        return adminArray; //may not need
    }

    deleteAdmin(adminArray, username) {
        for(let i = 0; i < adminArray.length; i++){
            if(username.equals(adminArray[i].getAdminUsername)){
                delete adminArray[i];
            }
        } 
        return adminArray; //may not need
    }

    editAdminUsername(adminArray, oldUsername, newUsername) {
        for(let i = 0; i < adminArray.length; i++){
            if(oldUsername.equals(adminArray[i].getAdminUsername)){
                adminArray[i].username = newUsername;
                break;
            }
        }
        return employeeArray; //may not need
    }

    editAdminLocation(adminArray, username, password) {
        for(let i = 0; i < adminArray.length; i++){
            if(username.equals(adminArray[i].getAdminUsername)){
                adminArray[i].password = password;
                break;
            }
        }
        return employeeArray; //may not need
    }
    editAdminsPassword(username, location) {
        for(let i = 0; i < adminArray.length; i++){
            if(username.equals(adminArray[i].getAdminUsername)){
                adminArray[i].location = location;
                break;
            }
        }
        return employeeArray; //may not need
    }
}

module.exports = Admin;
var Employee = require('./Employee.js')
var Cars = require('./Car.js')

class Admin extends Employee{
    constructor(username, password, name, location) {
        //constructor 
        super(username, password, name, location);
    }

    getAdminUsername() {
        return this.username
    }

    editUsername(user) {
        this.username = user;
    }

    editPassword(pass) {
        this.password = pass;
    }

    editName(nam) {
        this.name = nam;
    }

    editLocation(loco) {
        this.location = loco;
    }

    addEmployee(employeeArray, username, password, name, location) {
        employeeArray.push(new Employee(username, password, name, location));
    }

    deleteEmployee(employeeArray, username) {
        for(let i = 0; i < employeeArray.length; i++){
            if(username == employeeArray[i].getEmployeeUsername()){
                employeeArray.splice(i, 1);
            }
        } 
    }

    editEmployeeLocation(employeeArray, username, location) {
        for(let i = 0; i < employeeArray.length; i++){
            if(username == employeeArray[i].getEmployeeUsername()){
                employeeArray[i].editEmployeeLocation(location);
                break;
            }
        }
    }

    addAdmin(adminArray, username, password, name, location) {
        adminArray.push(new Admin(username, password, name, location));
    }

    deleteAdmin(adminArray, username) {
        for(let i = 0; i < adminArray.length; i++){
            if(username == adminArray[i].getAdminUsername()){
                adminArray.splice(i, 1);
            }
        } 
    }

    editAdminUsername(adminArray, oldUsername, newUsername) {
        for(let i = 0; i < adminArray.length; i++){
            if(oldUsername == adminArray[i].getAdminUsername()){
                adminArray[i].editUsername(newUsername);
                break;
            }
        }
    }

    editAdminPassword(adminArray, username, password) {
        for(let i = 0; i < adminArray.length; i++){
            if(username == adminArray[i].getAdminUsername()){
                adminArray[i].editPassword(password);
                break;
            }
        }
    }

    editAdminName(adminArray, username, name) {
        for(let i = 0; i < adminArray.length; i++){
            if(username == adminArray[i].getAdminUsername()){
                adminArray[i].editName(name);
                break;
            }
        }
    }

    editAdminLocation(adminArray, username, location) {
        for(let i = 0; i < adminArray.length; i++){
            if(username == adminArray[i].getAdminUsername()){
                adminArray[i].editLocation(location);
                break;
            }
        }
    }

    addCar(carArray, type, location, mileage, dayCost, mileCost, status, availability){
        carArray.push(new Cars(type, location, mileage, dayCost, mileCost, status, availability));
    }
}

module.exports = Admin;
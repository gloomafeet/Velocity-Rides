var Employee = require('./Employee.js')
var Cars = require('./Car.js')

class Admin extends Employee{
    constructor(username, password, name, location) {
        //constructor 
        super(username, password, name, location);
    }

    addEmployee(employeeArray, username, password, name, location) {
        employeeArray.push(new Employee(username, password, name, location));
    }

    deleteEmployee(employeeArray, username) {
        for(let i = 0; i < employeeArray.length; i++){
            if(username == employeeArray[i].getUsername()){
                employeeArray.splice(i, 1);
            }
        } 
    }

    getEmployee(employeeArray, username){
        for(let i = 0; i < employeeArray.length; i++){
            if(username == employeeArray[i].getUsername()){
                return employeeArray[i];
                break;
            }
        }
    }

    editEmployeeLocation(employeeArray, username, location) {
        for(let i = 0; i < employeeArray.length; i++){
            if(username == employeeArray[i].getUsername()){
                employeeArray[i].editLocation(location);
                break;
            }
        }
    }

    addAdmin(adminArray, username, password, name, location) {
        adminArray.push(new Admin(username, password, name, location));
    }

    deleteAdmin(adminArray, username) {
        for(let i = 0; i < adminArray.length; i++){
            if(username == adminArray[i].getUsername()){
                adminArray.splice(i, 1);
            }
        } 
    }

    editAdminUsername(adminArray, oldUsername, newUsername) {
        for(let i = 0; i < adminArray.length; i++){
            if(oldUsername == adminArray[i].getUsername()){
                adminArray[i].editUsername(newUsername);
                break;
            }
        }
    }

    editAdminPassword(adminArray, username, password) {
        for(let i = 0; i < adminArray.length; i++){
            if(username == adminArray[i].getUsername()){
                adminArray[i].editPassword(password);
                break;
            }
        }
    }

    editAdminName(adminArray, username, name) {
        for(let i = 0; i < adminArray.length; i++){
            if(username == adminArray[i].getUsername()){
                adminArray[i].editName(name);
                break;
            }
        }
    }

    editAdminLocation(adminArray, username, location) {
        for(let i = 0; i < adminArray.length; i++){
            if(username == adminArray[i].getUsername()){
                adminArray[i].editLocation(location);
                break;
            }
        }
    }

    addCar(carArray, type, location, mileage, dayCost, mileCost, status, availability){
        carArray.push(new Cars(type, location, mileage, dayCost, mileCost, status, availability));
    }

    deleteCar(carArray, type, location, mileage, dayCost, mileCost, status, availability) {
        let info = [type, location, mileage, dayCost, mileCost, status, availability];
        for (let i = 0; i < carArray.length; i++){
            if(JSON.stringify(info) === JSON.stringify(carArray[i].GetInfo())){
                carArray.splice(i, 1);
                break;
            }
        }
    }
}

module.exports = Admin;

var User = require('./User.js')
var Cars = require('./Car.js')
var Customers = require('./Customer.js')

//client username is their email 
class Employee extends User{
    constructor(username, password, name, location){
        super(username, password, name)
        this.location = location;
    }

    getEmployeeUsername() {
        return this.username;
    }

    //allow employee to only edit their own info
    editEmployeeUsername(oldUsername, newUsername, password) {
        if(password == this.password && oldUsername == this.username){
            this.username = newUsername;
            return true;
        }
        return false;
    }

    editEmployeePassword(newPassword, oldPassword, username) {
        if(oldPassword.equals(this.passwordE) && username.equals(this.usernameE)){
            this.password = newPassword;
            return true;
        }
        return false;
    }

    //edits the location but only admins can use this function!!
    editEmployeeLocation(location) {
        this.location = location;
        return true;
    }

    addCar(carArray, type, location, mileage, dayCost, mileCost, status, availability){
        carArray.push(new Cars(type, location, mileage, dayCost, mileCost, status, availability));
    }

    deleteCar(carArray, type, location, mileage, dayCost, mileCost, status, availability) {
        let info = [type, location, mileage, dayCost, mileCost, status, availability];
        for (let i = 0; i < carArray.length; i++){
            if(carArray[i].getInfo == info){
                carArray.splice(i, 1);
                break;
            }
        }
    }

    editCar(carArray, type, location, mileage, dayCost, mileCost, status, availability, editedElement, newVal) {
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
    }

    //view schedule of specific car 
    viewReservations(carObj) {
        return carObj.GetAvail()
    }

    //approving clients request online, client has to have an account 
    //checking avail should be done before request gets here 
    addReservation(startDate, endDate, startTime, endTime, clientUsername, carObj) {
        carObj.AddReserve(startDate, endDate, startTime, endTime, clientUsername);
    }

    removeReservation(startDate, endDate, startTime, endTime, carObj) {
        carObj.RemoveReserve(startDate, endDate, startTime, endTime);
    }

    checkForClientAccount(CustomerArray, clientUsername) {
        for(let i = 0; i < CustomerArray; i++){
            if(CustomerArray[i].GetCustUsername == clientUsername){
                return true;
            }
        }
        return false;
    }

    createClientAccount(customerArray, clientName, clientEmail, password) {
        //create client account if they don't have one when they first submit a reservation
        customerArray.push(new Customers(clientEmail, password, clientName));
    }
}

module.exports = Employee;
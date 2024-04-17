var User = require('./User.js')
var Cars = require('./Car.js')
var Customers = require('./Customer.js')

//client username is their email 
class Employee extends User{
    constructor(username, password, name, location){
        super(username, password, name)
        this.location = location;
    }

    //edits the location but only admins can use this function!!
    editLocation(newLocation) {
        this.location = newLocation;
        return true;
    }

    searchCarFromLocation(carArray, location){
        let carAtLocation = [];
        for(let i = 0; i < carArray.length; i++){
            let temp = carArray[i].GetInfo();
            //console.log(temp[1])
            if(temp[1] == location){
                //console.log(temp[1])
                carAtLocation.push(carArray[i])
            }
        }
        return carAtLocation;
    }

    editCar(carArray, type, location, mileage, dayCost, mileCost, status, availability, editedElement, newVal) {
        const info = [type, location, mileage, dayCost, mileCost, status, availability];
        for (let i = 0; i < carArray.length; i++){
            if(JSON.stringify(info) === JSON.stringify(carArray[i].GetInfo())){
                if(editedElement == 'type'){
                    carArray[i].EditType(newVal);
                    return true;
                }
                else if(editedElement == 'location'){
                    carArray[i].EditLoc(newVal);
                    return true;
                }
                else if(editedElement == 'mileage'){
                    carArray[i].EditMile(newVal);
                    return true;
                }
                else if(editedElement == 'dayCost'){
                    carArray[i].EditDayCost(newVal);
                    return true;
                }
                else if(editedElement == 'mileCost'){
                    carArray[i].EditMileCost(newVal);
                    return true;
                }
                else if(editedElement == 'status'){
                    carArray[i].EditStatus(newVal);
                    return true;
                }
                else{
                    return false;
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
        for(let i = 0; i < CustomerArray.length; i++){
            if(CustomerArray[i].getUsername() == clientUsername){
                return true;
            }
        }
        return false;
    }

    createClientAccount(customerArray, clientName, clientUsername, password) {
        //create client account if they don't have one when they first submit a reservation
        customerArray.push(new Customers(clientUsername, password, clientName));
    }
}

module.exports = Employee;

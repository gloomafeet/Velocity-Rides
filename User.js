class User{
    constructor(username, password, name) {
        //constructor 
        this.username = username; //check in database to ensure username & password are unqiue
        this.password = password; 
        this.name = name;
    }

    //Login functionality
    
    ViewCars(carsArray, startDate, endDate, startTime, endTime) {
        let avail_cars = [];
        for(let i = 0; i < carsArray.length; i++){
            if(carsArray[i].CheckAvail(startDate, endDate, startTime, endTime)){
                avail_cars.push(carsArray[i]);
            }
        }
        return avail_cars;
    }

    //approving clients request online, client has to have an account 
    //checking avail should be done before request gets here 
    addReservation(startDate, endDate, startTime, endTime, clientUsername, carObj) {
        carObj.AddReserve(startDate, endDate, startTime, endTime, clientUsername);
    }

    removeReservation(startDate, endDate, startTime, endTime, carObj) {
        carObj.RemoveReserve(startDate, endDate, startTime, endTime);
    }
}

module.exports = User;
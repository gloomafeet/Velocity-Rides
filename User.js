class User{
    constructor(username, password, name) {
        //constructor 
        this.username = username; //check in database to ensure username & password are unqiue
        this.password = password; 
        this.name = name;
    }

    //Login functionality
    ViewCars;
}

User.prototype.ViewCars = function(carsArray, startDate, endDate, startTime, endTime) {
    let avail_cars = [];
    for(let i = 0; i < carsArray.length; i++){
        if(carsArray[i].CheckAvail(startDate, endDate, startTime, endTime)){
            avail_cars.push(carsArray[i]);
        }
    }
    return avail_cars;
}

module.export = User;

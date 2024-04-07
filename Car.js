class Car {
    constructor(type, location, mileage, dayCost, mileCost, status, availability) {
        //constructor 
        this.typeC = type;
        this.locationC = location;
        this.mileageC = mileage;
        this.dayCostC = dayCost;
        this.mileCostC = mileCost;
        this.statusC = status;
        this.availabilityC = new Map(availability); 
    }
    GetInfo;
    EditType;
    EditLoc;
    EditMile;
    EditDayCost;
    EditMileCost;
    EditStatus;
    EditAvail;
    CheckAvail;
    AddReserve;
    RemoveReserve;
    GetAvail;
}

Car.prototype.GetInfo = function() {
    return [this.typeC, this.locationC, this.mileageC, this.dayCostC, this.mileCostC, this.statusC, this.availabilityC]
}

Car.prototype.EditType = function(type) {
    this.typeC = type;
}

Car.prototype.EditLoc = function(location) {
    this.locationC = location;
}

Car.prototype.EditMile = function(miles) {
    this.mileageC = miles;
}

Car.prototype.EditDayCost = function(dayCost) {
    this.dayCostCC = dayCost;
}

Car.prototype.EditMileCost = function(mileCost) {
    this.mileCostC = mileCost;
}

Car.prototype.EditStatus = function(status) {
    this.statusC = status;
}

Car.prototype.EditAvail = function(availability) {
    this.availabilityC = availability;
}

//check the availability of this car 
Car.prototype.CheckAvail = function(startDate, endDate, startTime, endTime) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    //ensure endTime > startTime when inputted in UI
    if(startDate.toString() == endDate.toString()){
        for(let j = 1; j < availabilityC.get(startDate).length; j++){
            let temp = j;
            temp--;
            if(startTime > availabilityC.get(startDate)[temp][1] && endTime < availabilityC.get(startDate)[j][0] ){
                return true;
            }
        }
        if(startTime > availabilityC.get(startDate)[availabilityC.get(startDate).length - 1][1] || endTime < availabilityC.get(startDate)[0][0]){
            return true;
        }
        return false;
    }
    else{
        //checking if the start and end time are free for the start/end dates 
        if(startTime < availabilityC.get(startDate)[availabilityC.get(startDate).length - 1][1] && endTime > availabilityC.get(endDate)[0][0]){
            return false;
        }
        
        let temp = new Date(startDate)
        temp.setDate(startDate.getDate() + 1)
        //checking the in between dates to ensure they are fully free
        for(let i = temp; i < endDate; i.setDate(i.getDate() + 1)){
            availabilityC.forEach((value, key) => {
                if(key == i.toString() && value.length != 0){
                    return false;
                }
            });
        }
        return true;
    }
}

//add a reservation for this car 
//ensure the startTime and endTime are in military time 
Car.prototype.AddReserve = function(startDate, endDate, startTime, endTime) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    //cannot use normal == for date objects 
    if(startDate.toString() == endDate.toString()){
        let existingPeriods = availabilityC.get(startDate) || [];
        existingPeriods.push([startTime, endTime]);
        existingPeriods.sort();
        availabilityC.set(startDate, existingPeriods);
    }
    else{
        //reserving the startDate, endDate, and the in between days 
        let existingPeriods = availabilityC.get(startDate) || [];
        existingPeriods.push([startTime, '23:59']);
        existingPeriods.sort();
        availabilityC.set(startDate, existingPeriods);

        existingPeriods = availabilityC.get(endDate) || [];
        existingPeriods.push(['00:00', endTime]);
        existingPeriods.sort();
        availabilityC.set(endDate, existingPeriods);
    
        //make temp 1 day ahead of startDate 
        let temp = new Date(startDate)
        temp.setDate(startDate.getDate() + 1)
            
        for(let i = temp; i < endDate; i.setDate(i.getDate() + 1)){
            existingPeriods = availabilityC.get(i) || [];
            existingPeriods.push(['00:00', '23:59']);
            availabilityC.set(new Date(i), existingPeriods)
        }
    }
}

//need to find the specific car object before calling this on that object 
Car.prototype.RemoveReserve = function(startDate, endDate, startTime, endTime) {

}

Car.prototype.GetAvail = function() {
    return this.availabilityC;
}

module.export = Car;
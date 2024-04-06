class Cars {
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
    GetAvail;
}

Cars.prototype.GetInfo = function() {
    return [this.typeC, this.locationC, this.mileageC, this.dayCostC, this.mileCostC, this.statusC, this.availabilityC]
}

Cars.prototype.EditType = function(type) {
    this.typeC = type;
}

Cars.prototype.EditLoc = function(location) {
    this.locationC = location;
}

Cars.prototype.EditMile = function(miles) {
    this.mileageC = miles;
}

Cars.prototype.EditDayCost = function(dayCost) {
    this.dayCostCC = dayCost;
}

Cars.prototype.EditMileCost = function(mileCost) {
    this.mileCostC = mileCost;
}

Cars.prototype.EditStatus = function(status) {
    this.statusC = status;
}

Cars.prototype.EditAvail = function(availability) {
    this.availabilityC = availability;
}

//check the availability of this car 
Cars.prototype.CheckAvail = function(startDate, endDate, startTime, endTime) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    
}

//add a reservation for this car 
//ensure the startTime and endTime are in military time 
Cars.prototype.AddReserve = function(startDate, endDate, startTime, endTime) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    //cannot use normal == for date objects 
    if(startDate.toString() == endDate.toString()){
        let existingPeriods = availabilityC.get(startDate) || [];
        existingPeriods.push([startTime, endTime]);
        availabilityC.set(startDate, existingPeriods);
    }
    else{
        //reserving the startDate, endDate, and the in between days 
        let existingPeriods = availabilityC.get(startDate) || [];
        existingPeriods.push([startTime, '23:59']);
        availabilityC.set(startDate, existingPeriods);

        existingPeriods = availabilityC.get(endDate) || [];
        existingPeriods.push(['00:00', endTime]);
        availabilityC.set(endDate, existingPeriods);
    
        //make temp 1 day ahead of startDate 
        let temp = new Date(startDate)
        temp.setDate(startDate.getDate() + 1)
        
        console.log("temp: " + temp)
    
        for(let i = temp; i < endDate; i.setDate(i.getDate() + 1)){
            existingPeriods = availabilityC.get(i) || [];
            existingPeriods.push(['00:00', '23:59']);
            availabilityC.set(new Date(i), existingPeriods)
        }
    }
}

Cars.prototype.GetAvail = function() {
    return this.availabilityC;
}

module.export = Car;
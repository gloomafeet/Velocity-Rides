class Cars {
    constructor(type, location, mileage, dayCost, mileCost, status, availability) {
        //constructor 
        this.typeC = type;
        this.locationC = location;
        this.mileageC = mileage;
        this.dayCostC = dayCost;
        this.mileCostC = mileCost;
        this.statusC = status;
        this.availabilityC = availability;
    }
    GetInfo;
    EditType;
    EditLoc;
    EditMile;
    EditDayCost;
    EditMileCost;
    EditStatus;
    EditAvail;
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
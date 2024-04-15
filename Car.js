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

    GetInfo() {
        return [this.typeC, this.locationC, this.mileageC, this.dayCostC, this.mileCostC, this.statusC, this.availabilityC];
    }

    EditType(type) {
        this.typeC = type;
    }

    EditLoc(location) {
        this.locationC = location;
    }

    EditMile(mile) {
        this.mileageC = mile;
    }

    EditDayCost(dayCost) {
        this.dayCostC = dayCost;
    }

    EditMileCost(mileCost) {
        this.mileCostC = mileCost;
    }

    EditStatus(status) {
        this.statusC = status;
    }

    GetAvail() {
        return this.availabilityC;
    }

    //check the availability of this car
    //false == is already booked during this time 
    CheckAvail(startDate, endDate, startTime, endTime) {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        let [sH, sM] = startTime.split(":").map(Number)
        let [eH, eM] = endTime.split(":").map(Number)
        startDate.setUTCHours(sH)
        startDate.setUTCMinutes(sM)
        endDate.setUTCHours(eH)
        endDate.setUTCMinutes(eM)

        if(((endDate.getTime() - startDate.getTime())/ (1000 * 60 * 60)) < 1){
            return false
        }

        startDate.setUTCHours(0)
        startDate.setUTCMinutes(0)
        endDate.setUTCHours(0)
        endDate.setUTCMinutes(0)


        if(startDate.toString() == endDate.toString()){
            let value = this.availabilityC.get(startDate.toString());
            if(value == undefined || value.length == 0){
                return true;
            }

            for(let j = 1; j < value.length; j++){
                let temp = j;
                temp--;
                if(startTime > value[temp][1] && endTime < value[j][0] ){
                    return true;
                }
            }
            if(startTime > value[value.length - 1][1] || endTime < value[0][0]){
                return true;
            }
            return false;
        }
        else{
            //checking if the start and end time are free for the start/end dates 
            let start = this.availabilityC.get(startDate.toString())
            let end = this.availabilityC.get(endDate.toString())

            if(start != undefined && start.length != 0 && startTime < start[start.length - 1][1]){
                return false;
            }
            if(end != undefined && end.length != 0 && endTime > end[0][0]){
                return false
            }
            
            let temp = new Date(startDate)
            temp.setDate(startDate.getDate() + 1)
            //checking the in between dates to ensure they are fully free
            //if not present in map = date is free
            for(let i = temp; i < endDate; i.setDate(i.getDate() + 1)){
                this.availabilityC.forEach((value, key) => {
                    if(key == i.toString() && value.length != 0){
                        return false;
                    }
                });
            }
            return true;
        }
    }

    //add a reservation for this car 
    //ensure date is in form "2022-11-02"
    //ensure time is military 
    AddReserve(startDate, endDate, startTime, endTime, username) {
        if(!this.CheckAvail(startDate, endDate, startTime, endTime)){
            return false
        }

        startDate += "T00:00:00"
        endDate += "T00:00:00"
        startDate = new Date(startDate);
        endDate = new Date(endDate);

        //cannot use normal == for date objects 
        if(startDate.toString() == endDate.toString()){
            let existingPeriods = this.availabilityC.get(startDate.toString()) || [];
            existingPeriods.push([startTime, endTime, username]);
            existingPeriods.sort()
            this.availabilityC.set(startDate.toString(), existingPeriods);
        }
        else{
            //reserving the startDate, endDate, and the in between days 
            let existingPeriods = this.availabilityC.get(startDate.toString()) || [];
            existingPeriods.push([startTime, '23:59', username]);
            existingPeriods.sort()
            this.availabilityC.set(startDate.toString(), existingPeriods);
        
            //make temp 1 day ahead of startDate 
            let temp = new Date(startDate)
            temp.setDate(startDate.getDate() + 1)
            
            for(let i = temp; i < endDate; i.setDate(i.getDate() + 1)){
                existingPeriods = this.availabilityC.get(i.toString()) || [];
                existingPeriods.push(['00:00', '23:59', username]);
                this.availabilityC.set(new Date(i).toString(), existingPeriods)
            }

            existingPeriods = this.availabilityC.get(endDate.toString()) || [];
            existingPeriods.push(['00:00', endTime, username]);
            existingPeriods.sort()
            this.availabilityC.set(endDate.toString(), existingPeriods);
        }
        return true;
    }

    //need to find the specific car object before calling this on that object 
    RemoveReserve(startDate, endDate, startTime, endTime) {
        startDate += "T00:00:00"
        endDate += "T00:00:00"
        startDate = new Date(startDate);
        endDate = new Date(endDate);

        if(startDate.toString() == endDate.toString()){
            let value = this.availabilityC.get(startDate.toString())
            for(let j = 0; j < value.length; j++){
                if(startTime == value[j][0] && endTime == value[j][1] ){
                    value.splice(j, 1)
                }
            }
        }
        else{
            let value = this.availabilityC.get(startDate.toString())
            for(let j = 0; j < value.length; j++){
                if(startTime == value[j][0] && '23:59' == value[j][1] ){
                    value.splice(j, 1)
                }
            }
    
            value = this.availabilityC.get(endDate.toString())
            for(let j = 0; j < value.length; j++){
                if('00:00' == value[j][0] && endTime == value[j][1] ){
                    value.splice(j, 1)
                }
            }
    
            let temp = new Date(startDate)
            temp.setDate(startDate.getDate() + 1)
            for(let i = temp; i < endDate; i.setDate(i.getDate() + 1)){
                this.availabilityC.get(i.toString()).splice(0,1)
            }
        }
    }
}

module.exports = Car;
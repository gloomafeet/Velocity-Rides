class User{
    constructor(username, password, name) {
        //constructor 
        this.username = username; //check in database to ensure username & password are unqiue
        this.password = stringToHash(password); 
        this.name = name;
        this.userType = "User";
    }

    getUserType() {
        return this.userType;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return hashToString(this.password);
    }

    getName() {
        return this.name;
    }

    editName(newName) {
        this.name = newName;
        return true;
    }

    editUsername(newUsername) {
        this.username = newUsername;
        return true;
    }

    editPassword(newPassword) {
        this.password = stringToHash(newPassword);
        return true;
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

    stringToHash(str) {
        let hash = '';
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            hash += charCode.toString(16);
        }
        return hash;
    }

    hashToString(hash) {
        let str = '';
        for (let i = 0; i < hash.length; i += 2) {
            const hex = hash.substr(i, 2);
            str += String.fromCharCode(parseInt(hex, 16));
        }
        return str;
    }
}

module.exports = User;

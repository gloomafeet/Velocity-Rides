var User = require('./User.js')

class Customer extends User{
    constructor(username, password, name) {
        //constructor 
        super(username, password, name); //call constructor of the User class
        this.userType = "Customer";
    }

    //Customer methods: rent car, view info, etc
}

module.exports = Customer;

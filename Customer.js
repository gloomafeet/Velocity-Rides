var User = require('./User.js')

class Customer extends User{
    constructor(username, password, name) {
        //constructor 
        super(username, password, name); //call constructor of the User class
    }

    //Customer methods: rent car, view info, etc
    GetCustUsername;
}

Customer.prototype.GetCustUsername = function(){
    return this.username;
}

module.exports = Customer;
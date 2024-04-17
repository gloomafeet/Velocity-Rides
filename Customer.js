var User = require('./User.js')

class Customer extends User{
    constructor(username, password, name) {
        //constructor 
        super(username, password, name); //call constructor of the User class
    }
}

module.exports = Customer;
var User = require('./User')

class Customer extends User{
    constructor(username, password, name) {
        //constructor 
        super(username, password, name); //call constructor of the User class
    }

    //Customer methods: rent car, view info, etc
}

module.export = Customer;
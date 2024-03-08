class Customers{
    constructor(username, password, name) {
        //constructor 
        this.usernameC = username; //check in database to ensure username & password are unqiue
        this.passwordC = password; //this has to go through a hash func before getting here
        this.nameC = name;
    }
}
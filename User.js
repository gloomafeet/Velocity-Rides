class User{
    constructor(username, password, name) {
        //constructor 
        this.username = username; //check in database to ensure username & password are unqiue
        this.password = password; //this has to go through a hash func before getting here
        this.name = name;
    }

    //Login functionality
}

module.export = User;
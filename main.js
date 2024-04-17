var Admin = require('./Admin.js')
var Employee = require('./Employee.js')
var Car = require('./Car.js')
var Customer = require('./Customer.js')
var User = require('./User.js')

var express = require('express')
var mongodb = require('mongodb')
var app = express()
var PORT = process.env.PORT || 2000

let mongoURI = 'mongodb://localhost:27017/databasePlsWork'

mongodb.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    
    // Further setup can be done here, such as defining routes, starting the server, etc.
    
    // Example: define a route
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

//used to ensure all the usernames for all the accounts are unqiue 
let usernames = [];

//use something like bycryt for password encryption

//this will store the currently made accounts to make it easier to fine specific people based on their username
//remember to pass these into functions; if not return the lists
let admins = [];
let employees = [];
let customers = [];
//make list of all the cars on system
let cars = [];

// let emptyMap = new Map();
// let x = new Admin("username", "password", "name", "loco");
// let newCar = new Car("Mini Cooper", "Texas", 1300, 30.40, 2.45, "no damage", emptyMap)
// cars.push(newCar)
// let car = new Car("Mini Cooper", "FL", 1300, 30.40, 2.45, "no damage", emptyMap)
// cars.push(car)

// cars[0].AddReserve("2024-03-03", "2024-03-03", "11:20", "14:02", "username")

// console.log(cars[0])
// let temp = x.searchCarFromLocation(cars, "Texas")
//console.log(temp)




// 

// 
// 

// 
// admins.push(x)

// x.addCar(cars, "Hunda", "Florida", 1000, 35.40, 3.45, "no damage", emptyMap)

// x.addEmployee(employees, "usern1", "pass1", "joe", "LOO")

// admins[0].addReservation("2024-11-08", "2024-11-08", "11:30", "15:59", "user1", cars[0])
// console.log(cars[0])
// admins[0].addReservation("2024-11-07", "2024-11-08", "11:30", "01:40", "user1", cars[1]);

// // console.log(cars[1].CheckAvail("2024-11-01", "2024-11-08", "01:30", "23:45"))

// // let user = new User("user", "pass", "name")
// let L = admins[0].ViewCars(cars, "2024-11-01", "2024-11-07", "01:30", "11:29")

// console.log(L)

// console.log(cars)

// x.deleteCar(cars, "Hunda", "Florida", 1000, 35.40, 3.45, "no damage", emptyMap)
// console.log(cars)

// admins.push(x)

// x.addEmployee(employees, "usern1", "pass1", "joe", "LOO")

// employees[0].createClientAccount(customers, "cname", "username", "pass")

// employees[0].addReservation("2024-11-01", "2024-11-08", "11:30", "1:40", "user1", cars[0])
// console.log(cars)
// employees[0].removeReservation("2024-11-01", "2024-11-08", "11:30", "1:40", cars[0])
// console.log(cars)

//console.log(cars[0].GetAvail())

// cars[0].GetAvail().forEach((value, key) => {
//     console.log(key)
//     console.log(value)
// });



// console.log(cars[0].CheckAvail("2024-11-01", "2024-11-08", "11:30", "1:40"))

// cars[0].RemoveReserve("2024-11-01", "2024-11-08", "11:30", "1:40")
// console.log(cars[0].CheckAvail("2024-11-01", "2024-11-08", "11:30", "1:40"))


//employees[0].addReservation("2024-11-01", "2024-11-08", "11:30", "1:40", "userna", cars[0])



//console.log(employees[0].checkForClientAccount(customers, "username"))

//employees[0].editCar(cars, "Hunda", "Florida", 1000, 35.40, 3.45, "no damage", emptyMap, "avail", emptyMap1)

//console.log(employees[0].viewReservations(cars[0]))

// console.log(cars)

// x.editEmployeeLocation(employees, "usern1", "Texas")

// console.log(employees)

// x.editAdminLocation(admins, "username", "user1")

// console.log(admins)

// cars.push(newCar);

// 

// cars[0].RemoveReserve("2024-03-03", "2024-03-03", "11:20", "14:02")

// console.log(cars[0])

// console.log(cars[0].CheckAvail("2024-03-03", "2024-03-03", "11:20", "14:02"))


var Admin = require('./Admin.js')
var Employee = require('./Employee.js')
var Car = require('./Car.js')
var Customer = require('./Customer.js')
var User = require('./User.js')

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

let emptyMap = new Map();

let x = new Admin("username", "password", "name", "loco");
let newCar = new Car("Mini Cooper", "Texas", 1300, 30.40, 2.45, "no damage", emptyMap)

admins.push(x)

x.addEmployee(employees, "usern1", "pass1", "joe", "LOO")

console.log(employees)

x.editEmployeeLocation(employees, "usern1", "Texas")

console.log(employees)

// x.editAdminLocation(admins, "username", "user1")

// console.log(admins)

// cars.push(newCar);

// cars[0].AddReserve("2024-03-03", "2024-03-03", "11:20", "14:02", "username")

// console.log(cars[0])

// cars[0].RemoveReserve("2024-03-03", "2024-03-03", "11:20", "14:02")

// console.log(cars[0])

// console.log(cars[0].CheckAvail("2024-03-03", "2024-03-03", "11:20", "14:02"))


import Employee from './Employee'
import Car from './Car'
import Customer from './Customer'
import User from './User'
import Admin from './Admin'

//used to ensure all the usernames for all the accounts are unqiue 
const usernames = [];

//use something like bycryt for password encryption

//this will store the currently made accounts to make it easier to fine specific people based on their username
//remember to pass these into functions; if not return the lists
const admins = [];
const employees = [];
const customers = [];

//make list of all the cars on system
const cars = [];

//since every kind of account needs this function it will be declared in main not the classes
function ViewAllCars(startDate, endDate){
    for(let i = 0; i < cars.length(); i++){
        
        if(cars[i].GetAvail())
    }
}
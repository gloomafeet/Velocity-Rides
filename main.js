import Employee from './Employee'
import Car from './Car'
import Customer from './Customer'
import User from './User'
import Admin from './Admin'

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


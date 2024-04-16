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

//export lists to use in the future 
export{
  cars,
  admins,
  employees,
  customers
}
//use this to import 
  //import { foods, drinks } from './example.js';

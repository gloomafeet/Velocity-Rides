var express = require('express')
var mongodb = require('mongodb')
var app = express()
var PORT = process.env.PORT || 2000
const {MongoClient} = require('mongodb')

let mongoURI = 'mongodb+srv://samnbe28:projectvelPLSWORK@veocityrides.tndz4wn.mongodb.net/?retryWrites=true&w=majority&appName=VeocityRides'
app.listen(PORT, ()=>{
    const client = new MongoClient(mongoURI)

    client.connect()
    console.log(`server is running on PORT ${PORT}`)
})








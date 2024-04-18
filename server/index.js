require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");


// database connection
db();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3000;
//app.listen(port, console.log(`Listening on port ${port}...`));
app.listen(port, ()=>{
    console.log(`server is running on PORT ${port}`)

    const userSchema = new mongoose.Schema({
        name: String,
        age: Number
      });

    const User = mongoose.model('User', userSchema);
    const newUser = new User({ name: 'John', age: 30 });
    newUser.save()
      .then(() => {
        console.log('User saved successfully');
      })
})

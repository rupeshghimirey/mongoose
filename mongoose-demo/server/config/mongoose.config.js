// This file establishes our connection to the database

// bringing in mongoose
const mongoose = require("mongoose");

// We need to connect to our database
// Make sure your name of your databse is unique!!
mongoose.connect("mongodb://localhost/nov_2021_mongoose_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I have found the mongoose!!"))
    .catch(err => console.log("I lost the mongoose!!", err))
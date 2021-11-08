// Bring in mongoose
const mongoose = require("mongoose");

// We make our model
const JokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [10, "title must be atleast 10 characters long"],
    },
    
    summary: String
});

// Finalize setup
const Joke = mongoose.model("Joke", JokeSchema);

// We need to export this model so we can use it in our project
module.exports = Joke;

// Bring in mongoose
const mongoose = require("mongoose");

// We make our model
const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    fact: String
});

// Finalize setup
const Animal = mongoose.model("Animal", AnimalSchema);

// We need to export this model so we can use it in our project
module.exports = Animal;
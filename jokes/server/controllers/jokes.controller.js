// We need to use the joke model
const Joke = require("../models/jokes.model");

// Now we set up our basic CRUD commands
// CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Something went wrong when creating a Joke!", err: err}))
}

// READ ONE
module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({message: "Something went wrong when finding one joke!", err: err}))
}

// READ ALL
module.exports.findAllJokes= (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: "Something went wrong when finding all jokes!", err: err}))
}

// READ Random Joke
module.exports.findRandomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => {
            let lengthOfJokes = allJokes.length
            let randomNum = Math.floor(Math.random()*lengthOfJokes)
            res.json(allJokes[randomNum])
        })
        .catch(err => res.json({message: "Something went wrong when finding random joke!", err: err}))
}

// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(updateJoke => res.json(updateJoke))
        .catch(err => res.json({message: "Something went wrong when updating joke!", err: err}))
}

// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: "Something went wrong when deleting one joke!", err: err}))
}

const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    //CREATE
    app.post("/api/jokes/create", JokeController.createJoke);
    //READ ONE
    app.get("/api/jokes/:_id", JokeController.findOneJoke);
    //READ ALL
    app.get("/api/jokes", JokeController.findAllJokes);
    //READ Random Joke
    app.get("/api/jokes/random/jokes", JokeController.findRandomJoke);
    //UPDATE
    app.put("/api/jokes/update/:_id", JokeController.updateJoke);
    //DELETE
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
}
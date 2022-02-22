const express = require("express");

// express app
const app = express();

// connect to db
const connect_db = require("./configs/db");
connect_db();

// listening to port 3010
app.listen(3010);

// global middleware
app.use(express.json());


// importing controllers
const mealController = require("./controllers/meal.controller");







// directing request to respective controller
app.use("/meals", mealController);

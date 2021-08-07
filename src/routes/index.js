const { config } = require("../app/controllers/shownControllers");
const shownRouter = require("./shownRoutes");
const shownTimeRouter = require("./shownTimeRouter");
const shownPlaceRouter = require("./shownPlaceRouter");
const userRouter = require("./userRouter");
const ticketRouter = require("./ticketRouter");
const express = require("express");
const router = express.Router();

function route(app) {
  // Extended : https://swagger.io/specification/#infoObject

  app.use("/", config, shownRouter);
  app.use("/showntime", config, shownTimeRouter);
  app.use("/shownplace", config, shownPlaceRouter);
  app.use("/user", config, userRouter);
  app.use("/ticket", config, ticketRouter);
}

module.exports = route;

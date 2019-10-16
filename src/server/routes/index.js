const express = require("express");
const controller = require("../controllers");
const routes = express.Router();

routes.route("/").get(controller.getQuotes);
routes.route("/new").post(controller.addQuote);
routes.route("/_update/:id").put(controller.updateQuote);
routes.route("/_delete/:id").delete(controller.deleteQuote);

module.exports = routes;

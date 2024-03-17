const express = require("express");
const productsController = require("../controllers/product");

const routes = express.Router();

routes.get("/", productsController.getDisplayProduct);

module.exports = routes;

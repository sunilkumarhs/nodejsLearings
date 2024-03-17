const express = require("express");
const productsController = require("../controllers/product");

const routes = express.Router();

routes.get("/add-product", productsController.getAddProduct);

routes.post("/add-product", productsController.getPostProduct);

module.exports = routes;

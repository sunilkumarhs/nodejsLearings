const express = require("express");
const path = require("path");
const routedir = require("../utils/path");
const adminData = require("./admin");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prds: products, docTitle: "Book-List Page", path: "/" });
});

module.exports = routes;

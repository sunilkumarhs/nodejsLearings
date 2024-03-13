const express = require("express");
const path = require("path");
const routedir = require("../utils/path");

const routes = express.Router();
const products = [];
routes.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    docTitle: "Adding Book Title",
    path: "/admin/add-product",
  });
});

routes.post("/add-product", (req, res, next) => {
  products.push({ productTitle: req.body.productTitle });
  res.redirect("/");
});

exports.routes = routes;
exports.products = products;

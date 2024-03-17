const ProductModel = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Adding Book Title",
    path: "/admin/add-product",
  });
};

exports.getPostProduct = (req, res, next) => {
  const product = new ProductModel(req.body.productTitle);
  product.save();
  res.redirect("/");
};

exports.getDisplayProduct = (req, res, next) => {
  ProductModel.getProducts((products) => {
    res.render("shop", {
      prds: products,
      docTitle: "Book-List Page",
      path: "/",
    });
  });
};

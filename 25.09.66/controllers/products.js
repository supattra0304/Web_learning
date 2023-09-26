const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) =>
    res.render("store", {
      prods: products,
      docTitle: "Store",
      path: "/",
      hasProduct: products.length > 0,
      productCSS: true,
      activeStore: true,
    })
  );
};

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    formCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title
    const price = req.body.price
  const product = new Product(title,price);
  product.save();
  res.redirect("/");
};

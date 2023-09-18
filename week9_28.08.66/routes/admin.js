const path = require("path");
const express = require("express");

const routDir = require("../utilities/path");

const router = express.Router();

const adminData = require("./admin");

const products = [];

// router.get("/add-product", (req, res, next) => {
//   res.sendFile(path.join(routDir,'views','add-product.html'))
// });

router.get("/add-product", (req, res, next) => {
  const products = adminData;
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    formCSS: true,
    activeAddProduct: true,
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(products);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;

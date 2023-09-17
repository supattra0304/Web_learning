const path = require('path')

const express = require("express");

const routDir = require('../utilities/path')
const adminData = require('./admin')

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(routDir, 'views','store.html'))
const products = adminData.products
res.render('store',{prods: products ,docTitle: "Store",path:"/"})
console.log(products)
});


module.exports = router;
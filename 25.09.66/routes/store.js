const path = require("path");

const express = require("express");

const productsController = require('../controllers/products')


const routDir = require("../utilities/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/",productsController.getProducts );

module.exports = router;

const products = [];
const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "product.json"
);
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log(err);
      cb([]);
    } else {
        cb(JSON.parse(fileContent)); 
    }
  });
};
module.exports = class Product {
  constructor(title,price) {
    this.title = title; 
    this.price = price
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });

  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};



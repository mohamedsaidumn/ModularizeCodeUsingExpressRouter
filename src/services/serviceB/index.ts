// routes/products/index.js
// create another router for getting 'product' resources
import express from "express";

let serviceA = express.Router();
// individual products routes
serviceA.get("/getBook", function (req, res) {
  console.log("Got a GET request for  serviceB/getBook");
  res.send("serviceB/getBook");
});

serviceA.get("/getBooks", function (req, res, next) {
  console.log("Got a GET request for  serviceB/getBooks");
  res.send("serviceB/getBooks");
});

export default serviceA;

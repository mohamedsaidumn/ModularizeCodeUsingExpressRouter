// routes/products/index.js
// create another router for getting 'product' resources
import express from "express";

let serviceA = express.Router();
// individual products routes
serviceA.get("/getBook", function (req, res) {
  console.log("Got a GET request for  serviceA/getBook");
  res.send("serviceA/getBook");
});

serviceA.get("/getBooks", function (req, res, next) {
  console.log("Got a GET request for  serviceA/getBooks");
  res.send("serviceA/getBooks");
});

export default serviceA;

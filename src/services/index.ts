// services/index.ts (our API service router)
import express from "express";
import serviceA from "./serviceA";
import serviceB from "./serviceB";

let services = express.Router();

// mount our 'service1' router onto the API router
services.use("/api/serviceA", serviceA); // api/serviceA/
services.use("/api/serviceB", serviceB); // api/serviceB/

// let's mount a few more
// router.use("/search", require("./search"));
// router.use("/cart", require("./cart"));
// router.use("/userCreation", require("./userCreation"));
// router.use("/checkout", require("./checkout"));
// router.use("/promo", require("./promo"));
// router.use("/account", ensureAuthenticated, require("./account"));
// router.use("/admin", ensureAuthenticated, require("./admin"));
// module.exports = router;

export default services;

module.exports = app => {
    const users = require("../controllers/user-controller.js");
    const customer = require("../controllers/customer-controller.js");

    var router = require("express").Router();

    router.get("/users", users.findAll);
    router.post("/create", users.create);

    router.get("/customer/all", customer.findAll);
    router.post("/customer/create", customer.create);
    
    app.use('/api', router);
};
const db = require("../models");
const Parties = db.parties;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.findAll = (req, res) => {
    Parties.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "name can not be empty!"
      });
      return;
    }
    // Create a Tutorial
    const user = {
      name: req.body.name,
      email: req.body.email
    };
  
    // Save Tutorial in the database
    Parties.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
};
const db = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secure = require('../config/secure');
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.findAll = (req, res) => {
    Users.findAll()
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
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    // Create a Tutorial
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    };
  
    // Save Tutorial in the database
    Users.create(user)
      .then(data => {
        var token = jwt.sign({ id: data.id }, secure.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.send({ auth: true, token: token, body:data });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
};
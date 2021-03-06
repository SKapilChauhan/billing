const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.js")(sequelize, Sequelize);
db.customer = require("./customer-model.js")(sequelize, Sequelize);
db.parties = require("./parties-model.js")(sequelize, Sequelize);
db.products = require("./products-model.js")(sequelize, Sequelize);
db.contacts = require("./contact-model.js")(sequelize, Sequelize);





module.exports = db;
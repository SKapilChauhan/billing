const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

var app = express();

var corsOptions = {origin: "http://localhost:5000"};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const port = process.env.PORT || 5000;

const db = require("./models");
db.sequelize.sync({operatorsAliases: 0});

require("./routes/routes")(app);

app.listen(port, () => {
    console.log(`express server is running at ${port}`)
});


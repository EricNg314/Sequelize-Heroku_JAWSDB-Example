//ENABLE if you want to use your own local environmental variables.
require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();
var db = require("./models");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ENABLE if you plan to use handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

//ENABLE if you plan to use controllers as routes/orm.
require("./controllers/html-routes.js")(app);


db.sequelize.sync({}).then(function(){
    app.listen(PORT, function(){
        console.log("Listening on localhost:" + PORT);
    });
});
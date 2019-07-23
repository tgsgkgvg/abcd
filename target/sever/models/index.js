const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/babycare");

module.exports.User = require("./user");
module.exports.bmi = require("./bmi");

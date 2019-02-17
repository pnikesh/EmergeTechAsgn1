let mongoose = require("mongoose");

//create model class
let msgSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    num: Number,
    subject: String
  },
  {
    collection: "userMessage"
  }
);

module.exports = mongoose.model("asgn1", msgSchema);

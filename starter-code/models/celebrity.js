const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritiesSchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },

  { timestamps: true }
);

const Celebrity = mongoose.model("celebrities", celebritiesSchema);
module.exports = Celebrity;

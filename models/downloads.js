// Calling the "mongoose" package
const mongoose = require("mongoose");

// Creating a Schema for uploaded files
const fileSchema = new mongoose.Schema({
  doctype: {
    type: String,
    required:[true, "Uploaded file must have a type"]
  },
  name: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
  size: {
    type: String,
    required:true
  },
  link: {
    type: String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Creating a Model from that Schema
const File = mongoose.model("File", fileSchema);

// Exporting the Model to use it in app.js File.
module.exports = File;
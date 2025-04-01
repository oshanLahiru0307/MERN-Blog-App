const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogUserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String, // Add profilePhoto field
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('blogUser', blogUserSchema);
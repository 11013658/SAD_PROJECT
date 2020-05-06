const mongoose = require("mongoose");

// Create Schema
const song_schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  song_name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  }
});

module.exports = Songs = mongoose.model("songs", song_schema);
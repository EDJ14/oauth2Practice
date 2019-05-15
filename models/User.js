const mongoose = require('mongoose');
const { Schema } = mongoose;

const userScehma = new Schema({
  googleId: String
});

mongoose.model('users', userScehma);

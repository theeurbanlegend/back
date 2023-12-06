const mongoose = require('mongoose');

const pulseSchema = new mongoose.Schema({
  allUsers:{
    type:Number
  },
  verified:{
    type:Number
  },
  exeTime:{
    type:Number
  }
},{timestamps:true})


const Pulse = mongoose.model('Pulse', pulseSchema);

module.exports = Pulse;


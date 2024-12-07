const mongoose = require('mongoose'); // Conexão com o banco

const LocationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Criando o modelo
const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;

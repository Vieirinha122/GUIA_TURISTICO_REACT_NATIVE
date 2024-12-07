const Location = require('../model/LocationModel');

// Função para salvar localização no banco de dados
const saveLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Latitude e Longitude são obrigatórios' });
    }

    const newLocation = new Location({ latitude, longitude });
    const savedLocation = await newLocation.save();

    res.status(201).json(savedLocation);
  } catch (error) {
    console.error('Erro ao salvar localização:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

// Função para listar todas as localizações salvas
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    console.error('Erro ao buscar localizações:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

module.exports = {
  saveLocation,
  getAllLocations,
};

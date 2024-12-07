const express = require('express');
const { saveLocation, getAllLocations } = require('../controller/LocationController');

const router = express.Router();

// Rota para salvar localização
router.post('/location', saveLocation);

// Rota para obter todas as localizações salvas
router.get('/locations', getAllLocations);

module.exports = router;

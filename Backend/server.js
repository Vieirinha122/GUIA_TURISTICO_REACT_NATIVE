require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const locationRoutes = require('./routes/locationRoutes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Conectar ao MongoDB e iniciar servidor
connectDB().then(() => {
  app.use('/api', locationRoutes);

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});

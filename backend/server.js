// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware esencial
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend funcionando!", status: 200 });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend corriendo en puerto ${PORT}`);
});
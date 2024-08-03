const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para obtener la frase del día
app.get('/api/phrase', async (req, res) => {
    try {
        const response = await axios.get('http://frasedeldia.azurewebsites.net/api/phrase');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener la frase del día:', error);
        res.status(500).json({ error: 'Error al obtener la frase del día' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

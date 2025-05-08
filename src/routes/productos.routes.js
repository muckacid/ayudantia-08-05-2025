const Router = require('express');
const rutas = Router();

//         (request, response)
rutas.get('/', (req, res) => {
    res.send("vista de productos");
});

rutas.post('/create', (req, res) => {
    res.send("vista de productos");
});


rutas.put('/modificar', (req, res) => {
    res.send("vista de productos");
});

module.exports = rutas;

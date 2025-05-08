
// Configuraciones | Referecncias
const Router = require('express');
const rutas = Router();
const rutasProductos = require('./productos.routes.js')

// Configuraciones | Rutas
rutas.use('/productos', rutasProductos);




//         (request, response)
rutas.get('/', (req, res) => {
    res.send("Hola Mundo!!!!!");
});



module.exports = rutas;

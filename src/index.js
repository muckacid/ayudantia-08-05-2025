// Configuraciones | Referencias
const express = require('express');
const app = express();
const rutas = require('./routes/index.js')

// Configuraciones | Servidor
app.set("port", 3000);

// Configuraciones | Rutas -> routting
app.use(rutas);

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado.");
  console.log(`http://www.localhost:${app.get('port')}`)
});

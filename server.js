const { urlencoded } = require('express');
const express = require('express');
const router = require('./routes.js')
//habilitar nuestra aplicacion web
const app = express();
//configuracion de formularios method POST
app.use(express.urlencoded({extended:true})) //middleware
app.use(express.json())


app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))
// poner una ruta antes del router nos agrega el www.holi.com/api/router
app.use('/api',router)

app.listen(3000, function(){
    console.log(`la ruta es http://localhost:3000`);
})
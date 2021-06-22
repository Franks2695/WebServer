const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//ESTABLECER EL MOTOR PARA LAS VISTAS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        titulo: 'Home',
        nombre: 'FRaNks sañaY'
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        titulo: 'About'
    });
});

/* app.get('/data', (req, res) => {
    res.send('data');
}); */

app.listen(3000, () => {
    console.log('Servidor iniciado, escuchando en el puerto 3000');
});
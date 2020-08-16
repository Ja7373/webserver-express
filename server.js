const express = require('express');
const app = express();
const hbs = require('hbs');

// helpers
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

console.log('directorio : ', __dirname);
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'javier',
    });
});

app.get('/about', (req, res) => res.render('about', {}));

// app.get('/about', function(req, res) {
//     res.render('about', {});
// });


app.get('/data', function(req, res) {
    let salida = {
        nombre: 'javier2',
        edad: 32,
        url: req.url
    };
    res.send(salida);
    // res.send('Hello World');
});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});
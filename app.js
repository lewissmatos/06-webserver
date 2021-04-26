const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', err => console.log(err));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Lewis', 
        titulo: 'curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'generics',
        titulo: 'pagina '
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'elements',
        titulo: 'pagina '
    });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});
 
app.listen(port, () => console.log(`ESTO ESTA CORRIENDO EL EL PUERTO http://localhost:${port}`));



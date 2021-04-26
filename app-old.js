const http = require('http');
http.createServer( (req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=lista-de-mmgvs.txt');

    res.writeHead(200, {'Content-Type': 'application/csv'});

    console.log(req);

    const persona = {
        id: 1,
        nombre : 'lewis'
    }
    res.write('Hola Mundo');
    
    res.end();

})
.listen( 8080 );


console.log('Escuchando el puerto 8080');
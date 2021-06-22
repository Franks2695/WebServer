const http = require('http');

http.createServer((req, res) => {
    /* res.write('Hola Mudo :) Ahora en la web desde JS');
    res.end(); */

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let contenido = {
        personaje: "Ghost",
        edad: 39,
        url: req.url
    }

    res.write(JSON.stringify(contenido));
    res.end();

}).listen(8081);

console.log('Escuchando en el puerto 8081.....');
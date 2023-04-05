var http = require('http');
fs = require('fs');

var html1 = fs.readFileSync('pages/bienvenidos.html')
var html2 = fs.readFileSync('pages/servicios.html')
var html3 = fs.readFileSync('pages/nosotros.html')
var html4 = fs.readFileSync('pages/contacto.html')
var html5 = fs.readFileSync('pages/prueba.html')

const server = http.createServer((req, res)=>{
    const url = req.url;

    if (url === '/'){
        res.write(html1)
    }
    else if(url ==='/servicios'){
        res.write(html2)
    }
    else if(url==='/nosotros'){
        res.write(html3);
    }
    else if(url==='/contacto'){
        res.write(html4);
    }
    else if(url==='/prueba'){
        res.write(html5);
    }
    else{
        res.write('Pagina no encontrada')
    }
    res.end();
});

server.listen(8081);
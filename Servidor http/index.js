var http = require("http");

http.CreateServer(function(req, res){
    {
        res.writeHead(200, {"Content-Type": "text/html"});
    }
res.end("Hola Mundo");
})

http.listen(3000, ()=>){
    console.log("Servidor en el puerto 3000");
}
var express = require("express"); // Importando
var app = express(); // Instanciando

// Rotas

app.get('/', function (req, res) {
    res.send('raiz');
 })

 app.get('/teste', (req, res) => {
    return res.send("teste");
});

// Server
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
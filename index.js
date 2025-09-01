const express = require('express');
const app = express();

app.use(express.json());

// criar um array "pessoas"

let pesoas = [
    {nome:'Lara',idade:'14', cor_favorita:'verde'},
    {nome:'Lynne',idade:'14', cor_favorita:'azul'},
    {nome:'Ana Luiza',idade:'13', cor_favorita:'lilas'},
    {nome:'Gabrielly',idade:'22', cor_favorita:'amarelo'},
    {nome:'Carol',idade:'18', cor_favorita:'vermelho'},
    
]

app.get('/',(req, res) =>  {
    res.json({mensagem: 'API de pessoas funcionado'});
});

//API do tipo GET rot = 'http://localhodt:3000/pessoas'

app.get('/pessoas',(req,res) => {
    res.json(pessoas)
});

const PORT =3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
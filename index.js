const express = require('express');
const app = express();

app.use(express.json());

// criar um array "pessoas"

let pessoas = [
    { id: 1, nome: 'Lara', idade: '14', cor_favorita: 'verde' },
    { id: 2, nome: 'Lynne', idade: '14', cor_favorita: 'azul' },
    { id: 3, nome: 'Ana Luiza', idade: '13', cor_favorita: 'lilas' },
    { id: 4, nome: 'Gabrielly', idade: '22', cor_favorita: 'amarelo' },
    { id: 5, nome: 'Carol', idade: '18', cor_favorita: 'vermelho' },

]
//API do tipo GET rota = 'http
app.get('/', (req, res) => {
    res.json({ mensagem: 'API de pessoas funcionado' });
});

//API do tipo GET rota = 'http://localhodt:3000/pessoas'
app.get('/pessoas', (req, res) => {
    res.json(pessoas)
});

// API do tipo POST (adiciona)
app.post("/pessoa", (req, res) => {
    const { nome, idade } = req.body;
    const newUser = {
        id: pessoas.length + 1,
        nome,
        idade,
    };
    console.log("NOvos dados: ", newUser)
    pessoas.push(newUser);
    res.status(201).json(newUser); //codigo de criação com sucesso
});

//API do tipo GET para buscar 1 pessoa só por ID 
//rota: htto://localhost:3000/pessoas/2
app.get("/pessoa/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(u => u.id === id);

    if (!pessoa) {
        return res.status(404).json({ error: "Usuario nao encontrado" });
    }
    res.json(pessoa);
});


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
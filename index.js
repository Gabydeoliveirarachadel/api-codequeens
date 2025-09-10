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

app.post('/pessoas', (req, res) => {
    const { nome, idade, cor_favorita } = req.body;
    const newUser = {
        id: pessoas.length + 1,
        nome,
        idade,
        cor_favorita
    };

    console.log("novos dados:", newUser)
    pessoas.push(newUser);
    res.status(201).json(newUser);//codigo de criacao com sucesso
})

//API do tipo GET rota = 'http://localhodt:3000/pessoas'
app.get('/pessoas', (req, res) => {
    res.json(pessoas)
});

// API do tipo POST (adiciona)
app.post('/pessoa', (req, res) => {
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
app.put("/pessoa/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log("ID: ", id)

    const pessoa = pessoas.find(p => p.id === id);
    console.log("PESSOA: ", pessoa)

    if (!pessoa) {
        return res.status(404).json({ mensagem: 'Pessoas nao encontrado' });
    }

    const novaPessoa = req.body;
    console.log("ANTIGA PESSOA: ", pessoa)
    console.log("NOVA PESSOA: ", novaPessoa)

    pessoa.nome = novaPessoa.nome
    pessoa.idade = novaPessoa.idade
    pessoa.cor_favorita = novaPessoa.cor_favorita

    pessoas[pessoa.id -1] = pessoa

    console.log("PESSOAS: ", pessoas)
    res.json(pessoas);
});

//endpoint 05 do tipo PUT/patch rota = 'http//localh
app.put('/pessoas/:id',(req,res) =>{
    pessoas[id] = req.body
    console.log(pessoas[1])
  
})

app.delete("/pessoa/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log("ID: ", id)

    const pessoa = pessoas.findIndex(p => p.id === id);
    console.log("PESSOA: ", pessoa)

    if (pessoa >= -1) {
        return res.status(404).json({ mensagem: 'Pessoas nao encontrado' });
    }
   pessoas.splice(pessoa, 1);
   console.log(pessoas);
   res.json(pessoas);
});

app.get("/totalPessoas",(req, res) => {
    console.log("REQUISICAO: ", req)
    console.log("\n\nRESPONSE: ", res)
    res.json({data: pessoas.length})
});



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
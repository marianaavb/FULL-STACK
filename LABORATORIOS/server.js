const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const banco = client.db('blog');
const posts = banco.collection('posts');

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
const usuarios = [];
app.use(express.urlencoded({ extended: false }));
const http = require('http');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.redirect('/Projetos/projects.html');
});

app.get('/cadastra', (req, res) => {
    res.sendFile(__dirname + '/public/Cadastro.html');
});

app.post('/cadastra', (req, res) => {
    const novoUsuario = {
        nome: req.body.nome,
        usuario: req.body.usuario,
        senha: req.body.senha
    };

    usuarios.push(novoUsuario);
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/Login.html');
});

app.post('/login', (req, res) => {
    const usuarioEncontrado = usuarios.find((usuario) =>
        usuario.usuario === req.body.usuario &&
        usuario.senha === req.body.senha
    );

    if (usuarioEncontrado) {
        res.render('resposta', {
            mensagem: `Login realizado com sucesso, ${usuarioEncontrado.nome}!`
        });
    } else {
        res.render('resposta', {
            mensagem: 'Usuário ou senha inválidos.'
        });
    }
});

app.post('/cadastrar_post', (req, res) => {
    const novoPost = {
        titulo: req.body.titulo,
        resumo: req.body.resumo,
        conteudo: req.body.conteudo
    };

    posts.insertOne(novoPost, (erro) => {
        if (erro) {
            console.log(erro);
            return res.status(500).send('Erro ao cadastrar o post.');
        }

        res.redirect('/blog');
    });
});

app.use(express.static('public'));

let server = http.createServer(app);
server.listen(80);


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

app.use(express.static('public'));

let server = http.createServer(app);
server.listen(80);


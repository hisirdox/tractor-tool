const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

var validCredentials = {
  login: "admin",
  password: "admin",
  type: "Matriz" // Tipo de login padrão
};

app.use(session({ secret: 'sw34567uio-0987ytfc' }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  if (req.body.password === validCredentials.password && req.body.login === validCredentials.login) {
    req.session.login = validCredentials.login;
    req.session.type = req.body.type || validCredentials.type; // Usar tipo padrão se não for fornecido
    res.send('Logado com sucesso!');
  } else {
    res.send('Credenciais inválidas!');
  }
});

app.get('/', (req, res) => {
  if (req.session.login === validCredentials.login) {
    switch (req.session.type) {
      case 'Matriz':
        res.send('Bem-vindo à tela da Matriz!');
        break;
      case 'Proprietário':
        res.send('Bem-vindo à tela do Proprietário!');
        break;
      case 'Concessionaria':
        res.send('Bem-vindo à tela da Concessionária!');
        break;
      default:
        res.send('Tipo de login desconhecido!');
        break;
    }
  } else {
    res.send('Você não está logado!');
  }
});

app.listen(port, () => {
  console.log('servidor rodando');
});

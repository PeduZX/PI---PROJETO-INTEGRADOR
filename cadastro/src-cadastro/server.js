const express = require('express');
const bcrypt = require('bcrypt');
const db = require("./db_config");
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json()); 

// Middlewares
app.use(express.static('public'));
app.use(cors());


// ========================
// Rota de cadastro
// ========================
app.post('/register',(req, res) => {
  const { nome, email, dataNasc,senha} = req.body;

  bcrypt.hash(senha, 10, (err, hash) => {
    if (err){
       res.status(500).json({ error: 'Erro ao criptografar senha' });
       return;
    }

    const sql = 'INSERT INTO users (nome, email, data_nasc,senha) VALUES (?, ?, ?, ?)';
    db.query(sql, [nome, email, dataNasc ,hash], (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        return;
        }   
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    });
  });
});


// ========================
// Rota de cadastro tabela mentorado
// ========================
app.post("/registerMentorado", (req, res) => {
  const {nomeAreaMentorado} = req.body;

    console.log(nomeAreaMentorado);

  const query = `
    INSERT INTO mentorado (nomeAreaMentorado) VALUES (?)`;

  db.query(query, [nomeAreaMentorado], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, message: "Erro ao salvar no banco", data: err });
    }

    res.status(201).json({ success: true, message: "Carro cadastrado com sucesso!", data: results });
  });
});

// ========================
// Rota de cadastro tabela mentorar
// ========================
app.post("/registerMentorar", (req, res) => {
  console.log(nomeAreaMentorar);
  const params = [
    req.body.nomeAreaMentorar
    ];

  const query = `
    INSERT INTO mentorar (nomeAreaMentorar) VALUES (?)`;

  db.query(query, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, message: "Erro ao salvar no banco", data: err });
    }

    res.status(201).json({ success: true, message: "Carro cadastrado com sucesso!", data: results });
  });
});

// ========================
// Rota de login
// ========================
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Erro no login" });
    if (results.length === 0)
      return res.status(401).json({ error: "Usuário não encontrado" });

    const user = results[0];

    bcrypt.compare(senha, user.senha, (err, match) => {
      if (err)
        return res.status(500).json({ error: "Erro ao verificar senha" });
      if (!match) return res.status(401).json({ error: "Senha incorreta" });

      res.json({ message: "Login realizado com sucesso!" });
    });
  });
});




// ========================
// Inicialização do servidor
// ========================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

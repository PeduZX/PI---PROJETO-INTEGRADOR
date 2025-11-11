const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./db_config");
const cors = require("cors");

const app = express();
app.use(cors()); // Habilita CORS para o navegador
app.use(express.json());


// ========================
// Rota de cadastro
// ========================
app.post('/register',(req, res) => {
  const {nome, email, dataNasc, senha } = req.body;

  bcrypt.hash(senha, 10, (err, hash) => {
    if (err) return res.status(500).json({ error: 'Erro ao criptografar senha' });

    const sql = "INSERT INTO users (nome, email, data_nasc, senha) VALUES (?, ?, ?, ?)";
    db.query(sql, [nome, email, hash], (err) => {
      if (err) return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
      res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    });
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
// Rota de cadastro tabela mentorar
// ========================
app.post("/registerMentorar", (req, res) => {
  const nomeAreaMentorar = req.body.nome_area_mentorar;

  if (!arquivo) {
    return res.status(400).json({ success: false, message: "Preencha todos os campos" });
  }

  const params = [
    req.body.nomeAreaMentorar
  ];

  const query = `
    INSERT INTO mentorar (nome_area_mentorar) VALUES (?);`;

  db.query(query, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, message: "Erro ao salvar no banco", data: err });
    }

    res.status(201).json({ success: true, message: "Carro cadastrado com sucesso!", data: results });
  });
});

// ========================
// Rota de cadastro tabela mentorado
// ========================
app.post("/registerMentorado", (req, res) => {
  const nomeAreaMentorado = req.body.nome_area_mentorado;

  if (!arquivo) {
    return res.status(400).json({ success: false, message: "Preencha todos os campos" });
  }

  const params = [
    req.body.nomeAreaMentorado
  ];

  const query = `
    INSERT INTO mentorado (nome_area_mentorado) VALUES (?);`;

  db.query(query, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, message: "Erro ao salvar no banco", data: err });
    }

    res.status(201).json({ success: true, message: "Carro cadastrado com sucesso!", data: results });
  });
});

// ========================
// Inicialização do servidor
// ========================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

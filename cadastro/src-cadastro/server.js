const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./db_config");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Middlewares
app.use(express.static("public"));

// ========================
// Rota de cadastro
// ========================
app.post("/register", (req, res) => {
  const { nome, email, dataNasc, senha } = req.body;

  bcrypt.hash(senha, 10, (err, hash) => {
    if (err)
      return res.status(500).json({ error: "Erro ao criptografar senha" });

    const sql =
      "INSERT INTO users (nome, email, data_nasc, senha) VALUES (?, ?, ?, ?)";
    db.query(sql, [nome, email, dataNasc, hash], (err, result) => {
      if (err)
        return res.status(500).json({ error: "Erro ao cadastrar usuário" });

      res
        .status(201)
        .json({
          message: "Usuário cadastrado com sucesso!",
          userId: result.insertId,
        });
    });
  });
});

// ========================
// Rota de cadastro tabela funcoesUser
// ========================
app.post("/registerAreas", (req, res) => {
  const { nomeAreaMentorado, nomeAreaMentorar, users_id } = req.body;

  const query =
    "INSERT INTO funcoesUser (nomeAreaMentorar, nomeAreaMentorado, users_id) VALUES (?, ?, ?)";
  db.query(
    query,
    [nomeAreaMentorar, nomeAreaMentorado, users_id],
    (err, results) => {
      if (err) {
        console.error(err);
        return res
          .status(400)
          .json({
            success: false,
            message: "Erro ao salvar no banco",
            data: err,
          });
      }

      res
        .status(201)
        .json({
          success: true,
          message: "Usuário cadastrado com sucesso!",
          data: results,
        });
    },
  );
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

      res.json({ message: "Login realizado com sucesso!", userId: user.id });
    });
  });
});


// ========================
// Rota de editar usuário
// ========================

app.put("/editarUser/:id", (req, res) => {
  const { inputNome, inputSenha } = req.body;
  const userId = req.params.id;

  const query = "UPDATE users SET nome = ?, senha = ? WHERE id = ?";
  db.query(query, [inputNome, inputSenha, userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao editar usuário" });
    }
    res.json({ message: "Usuário editado com sucesso!" });
  });
});

// ========================
// Inicialização do servidor
// ========================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

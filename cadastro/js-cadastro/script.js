// Função para cadastrar usuário
async function cadastrar() {
  const nome = document.getElementById("input-nome").value.trim(); 
  const email = document.getElementById("input-email").value.trim();
  const dataNasc = document.getElementById("input-data").value;
  const senha = document.getElementById("input-senha").value.trim();
  const nomeAreaMentorar = document.getElementById("select-mentorar").value;
  const nomeAreaMentorado = document.getElementById("select-mentorado").value;

  //Tudo abaixo é só para teste no console OBS.: Se quiser pode apagar depois, para testar descomentando as linhas
  // console.log('Nome:', nome);
  // console.log('Email:', email);
  // console.log('Data de Nascimento:', dataNasc);
  // console.log('Senha:', senha);
  // console.log('Mentorado em:', nomeAreaMentorado);
  // console.log('Mentorar em:', nomeAreaMentorar);

  // registra usuário na tabela users
  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, dataNasc, senha }),
    });

    const data = await response.json();
    document.getElementById("msg").innerText = data.message || data.error;
  } catch (err) {
    console.error("Erro no fetch:", err);
    document.getElementById("msg").innerText = "Erro no cadastro.";
  }

  // registra a disciplina na tabela mentorar
  try {
    const response = await fetch("http://localhost:3000/registerAreas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nomeAreaMentorar, nomeAreaMentorado }),
    });

    const data = await response.json();
    document.getElementById("msg").innerText = data.message || data.error;
  } catch (err) {
    console.error("Erro no fetch:", err);
    document.getElementById("msg").innerText = "Erro no cadastro.";
  }
}

// Função para login de usuário
async function login() {
  const email = document.getElementById("input-email").value.trim();
  const senha = document.getElementById("input-senha").value.trim();

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();
    alert(data.message);
    document.getElementById("msg").innerText = data.message || data.error;
    document.getElementById("msg").style.color = "green";
    document.getElementById("msg").style.fontSize = "22px";
  } catch (err) {
    document.getElementById("msg").innerText = "Erro no login";
  }
}


async function editarUser(){

const inputNome = document.getElementById("input-nome").value.trim();
const inputSenha = document.getElementById("input-senha").value.trim();
const profileName = document.getElementById("profileName");

try {
  const response = await fetch("http://localhost:3000/editarUser", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inputNome, inputSenha }),
  });

  const data = await response.json();
  if (response.ok) {
    alert(data.message);
    profileName.textContent = inputNome; // Atualiza o nome no perfil
  } else {
    alert(data.error || "Erro ao editar usuário");
  }

} catch(err){
  console.error("Erro no fetch:", err);
  Alert("Erro ao editar usuário");
}
}

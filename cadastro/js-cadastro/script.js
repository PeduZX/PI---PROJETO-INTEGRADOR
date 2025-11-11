// Captura o clique do botão
document.getElementById('btn-cadastrar').addEventListener('click', cadastrar);

// Função para cadastrar usuário
async function cadastrar() {
  const nome = document.getElementById('input-nome').value.trim(); //Boas praticas tirando os espaços
  const email = document.getElementById('input-email').value.trim();
  const dataNasc = document.getElementById('input-data').value;
  const senha = document.getElementById('input-senha').value.trim(); //importante tirar os espaços das senhas
  const mentorado = document.getElementById('select-mentorado').value;
  const mentorar = document.getElementById('select-mentorar').value;


  //console.log("Data enviada:", dataNasc);


  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, dataNasc, senha, mentorado, mentorar })
    });

    const data = await response.json();
    document.getElementById('msg').innerText = data.message || data.error;

  } catch (err) {
    console.error("Erro no fetch:", err);
    document.getElementById('msg').innerText = 'Erro no cadastro.';
  }
}

try {
  const response = await fetch('http://localhost:3000/registerMentorar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({nomeAreaMentorar})
  });

  const data = await response.json();
  document.getElementById('msg').innerText = data.message || data.error;

} catch (err) {
  console.error("Erro no fetch:", err);
  document.getElementById('msg').innerText = 'Erro no cadastro.';
}
try {
  const response = await fetch('http://localhost:3000/registerMentorado', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({nomeAreaMentorado})
  });

  const data = await response.json();
  document.getElementById('msg').innerText = data.message || data.error;

} catch (err) {
  console.error("Erro no fetch:", err);
  document.getElementById('msg').innerText = 'Erro no cadastro.';
}



// Função para login de usuário
async function login() {

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();
    alert(data.message)
    document.getElementById('msg').innerText = data.message || data.error;  
  } catch (err) {
    document.getElementById('msg').innerText = 'Erro no login';
  }
}
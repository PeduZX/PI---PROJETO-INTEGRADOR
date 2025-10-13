// Função para cadastrar usuário
async function cadastrar() {
  const nome = document.getElementById('input-nome').value;
  const email = document.getElementById('input-email').value;
  const dataNasc = document.getElementById('input-data').value;
  const senha = document.getElementById('input-senha').value;
  
  // Convertendo data para formato YYYY-MM-DD
  //const data_nasc = new Date(dataNasc.split('/').reverse().join('-')).toISOString().split('T')[0];

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, dataNasc, senha })
    });

    const data = await response.json();
    document.getElementById('msg').innerText = data.message || data.error;
  } catch (err) {
    document.getElementById('msg').innerText = 'Erro no cadastro';
  }
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
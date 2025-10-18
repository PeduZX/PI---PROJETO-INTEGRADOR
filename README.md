# PI---PROJETO-INTEGRADOR

<img width="823" height="536" alt="image" src="https://github.com/user-attachments/assets/5e30a577-54ec-4f96-baec-a8f7a53b94d6" />


CREATE DATABASE bancoPI;
USE bancoPI;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  data_nasc DATE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  pontos INT
);

CREATE TABLE mentorar (
  id_area_mentorar INT AUTO_INCREMENT PRIMARY KEY,
  nome_area_mentorar VARCHAR(100) NOT NULL,
  users_id INT NOT NULL,
  FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE mentorado (
  id_area_mentorado INT AUTO_INCREMENT PRIMARY KEY,
  nome_area_mentorado VARCHAR(100) NOT NULL,
  users_id INT NOT NULL,
  FOREIGN KEY (users_id) REFERENCES users(id)
);

	CREATE TABLE mensagens (
  id_mensagens INT AUTO_INCREMENT PRIMARY KEY,
  conteudo TEXT NOT NULL,
  data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
  users_id INT NOT NULL,
  FOREIGN KEY (users_id) REFERENCES users(id)
);

SELECT * FROM users;
SELECT * FROM mentorar;
SELECT * FROM mentorado;
SELECT * FROM mensagens;

DROP DATABASE bancoPI;








<img width="500" height="45" alt="image" src="https://github.com/user-attachments/assets/68c28440-aca2-429a-90da-c87dd13f6b27" />









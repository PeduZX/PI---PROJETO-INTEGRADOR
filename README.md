# PI---PROJETO-INTEGRADOR

<img width="861" height="276" alt="image" src="https://github.com/user-attachments/assets/b44aa7d8-9a76-4a08-9e2b-c45d5b8ae2fa" />

CREATE DATABASE bancoPI;
USE bancoPI;


CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  data_nasc DATE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  pontos INT
  );


CREATE TABLE mentorar (
  id_area_mentorar INT  PRIMARY KEY AUTO_INCREMENT,
  nome_area_mentorar VARCHAR(100) NOT NULL,
  users_id INT NOT NULL,
	FOREIGN KEY (`users_id`) REFERENCES users (id)
);


CREATE TABLE mentorado (
  id_area_mentorado INT  PRIMARY KEY AUTO_INCREMENT,
  nome_area_mentorado VARCHAR(100) NOT NULL,
  users_id INT NOT NULL,
    FOREIGN KEY (`users_id`) REFERENCES users (id)
);

SELECT * FROM users;
SELECT * FROM mentorar;
SELECT * FROM mentorado;







<img width="500" height="45" alt="image" src="https://github.com/user-attachments/assets/68c28440-aca2-429a-90da-c87dd13f6b27" />







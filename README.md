# PI---PROJETO-INTEGRADOR

<img width="823" height="536" alt="image" src="https://github.com/user-attachments/assets/5e30a577-54ec-4f96-baec-a8f7a53b94d6" />


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








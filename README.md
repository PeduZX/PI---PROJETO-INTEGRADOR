# PI---PROJETO-INTEGRADOR

<img width="859" height="533" alt="image" src="https://github.com/user-attachments/assets/2d3ab0b5-408e-47dd-93ff-336b91e252d7" />




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
	FOREIGN KEY (users_id) REFERENCES users (id)
);


CREATE TABLE mentorado (
  id_area_mentorado INT  PRIMARY KEY AUTO_INCREMENT,
  nome_area_mentorado VARCHAR(100) NOT NULL,
  users_id INT NOT NULL,
    FOREIGN KEY (users_id) REFERENCES users (id)
);

CREATE TABLE mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    area_id INT NOT NULL,
    conteudo TEXT NOT NULL,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (area_id) REFERENCES areas(id)
);

CREATE TABLE mensagens (
  id_mensagens  VARCHAR(3000) PRIMARY KEY NOT NULL,
  data_envio DATETIME NOT NULL,
  users_id INT NOT NULL,
    FOREIGN KEY (users_id) REFERENCES users (id)
);



SELECT * FROM users;
SELECT * FROM mentorar;
SELECT * FROM mentorado;



SELECT * FROM users;
SELECT * FROM mentorar;
SELECT * FROM mentorado;

drop database bancoPI;







DROP DATABASE bancoPI;








<img width="500" height="45" alt="image" src="https://github.com/user-attachments/assets/68c28440-aca2-429a-90da-c87dd13f6b27" />












-- Facem baza de date 'app'
CREATE DATABASE app;

-- Comută pe baza de date 'app'
USE app;

-- Facem tabela 'users'
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Facem utilizatorul 'app' cu parola 'password'
CREATE USER 'app'@'localhost' IDENTIFIED BY 'password';

-- Dam utilizatorului 'app' acces complet la baza de date 'app'
GRANT ALL PRIVILEGES ON app.* TO 'app'@'localhost';

-- Aplicăm modificările de privilegii
FLUSH PRIVILEGES;

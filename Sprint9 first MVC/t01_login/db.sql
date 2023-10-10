USE ucode_web;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    login VARCHAR(25) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    status ENUM('admin', 'user') DEFAULT (2),
    fullName VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);
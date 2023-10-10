USE ucode_web;

CREATE TABLE IF NOT EXISTS heroes(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL,
    PRIMARY KEY (id)
);
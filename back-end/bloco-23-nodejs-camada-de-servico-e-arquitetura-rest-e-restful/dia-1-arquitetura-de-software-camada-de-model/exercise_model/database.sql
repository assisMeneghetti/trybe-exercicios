    DROP DATABASE IF EXISTS `db`;

    CREATE DATABASE IF NOT EXISTS `db`;

    USE `db`;

    CREATE TABLE users
    (
        id INT NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL,
        `password` VARCHAR(12) NOT NULL,
        PRIMARY KEY(id)
    );

    INSERT INTO users (first_name,last_name,email,`password`)

    VALUES ('Assis','Meneghetti','assismfabri@hotmail.com','123456789123');

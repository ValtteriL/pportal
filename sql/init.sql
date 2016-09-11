CREATE DATABASE pportal;

CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'example';

CREATE TABLE pportal.pukit (
    id INT NOT NULL AUTO_INCREMENT,
    age INT NOT NULL,
    puh VARCHAR(10) NOT NULL,
    email VARCHAR(50) NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL,
    radius INT NOT NULL,
    description VARCHAR(500),
    image CHAR(4),
    password CHAR(128) NOT NULL,
    rating INT,
    suomi BOOLEAN,
    ruotsi BOOLEAN,
    englanti BOOLEAN,
    venaja BOOLEAN,
    PRIMARY KEY(id)
);


CREATE TABLE pportal.customers (
    id INT NOT NULL AUTO_INCREMENT,
    idpukki INT NOT NULL,
    firstname VARCHAR(15) NOT NULL,
    lastname VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    rating INT,
    kommentti VARCHAR(300),
    puh VARCHAR(10) NOT NULL,
    PRIMARY KEY(id)
);


GRANT SELECT, INSERT, UPDATE ON pportal.pukit TO 'testuser'@'localhost';
GRANT SELECT, INSERT, UPDATE ON pportal.customers TO 'testuser'@'localhost';
FLUSH PRIVILEGES;

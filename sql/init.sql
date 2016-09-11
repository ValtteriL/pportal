CREATE DATABASE pportal;

CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'example';

CREATE TABLE pportal.pukit (
    id INT NOT NULL AUTO_INCREMENT,
    fname VARCHAR(15) NOT NULL,
    lname VARCHAR(15) NOT NULL,
    age INT NOT NULL,
    phone VARCHAR(10) NOT NULL,
    email VARCHAR(50) NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL,
    radius INT NOT NULL,
    description VARCHAR(500),
    image CHAR(4),
    password CHAR(128) NOT NULL,
    noratings INT,
    nopoints INT,
    suomi BOOLEAN,
    ruotsi BOOLEAN,
    englanti BOOLEAN,
    venaja BOOLEAN,
    PRIMARY KEY(id)
);


CREATE TABLE pportal.customers (
    id INT NOT NULL AUTO_INCREMENT,
    idpukki INT NOT NULL,
    fname VARCHAR(15) NOT NULL,
    lname VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    rating INT,
    kommentti VARCHAR(300),
    phone VARCHAR(10) NOT NULL,
    PRIMARY KEY(id)
);


GRANT SELECT, INSERT, UPDATE ON pportal.pukit TO 'testuser'@'localhost';
GRANT SELECT, INSERT, UPDATE ON pportal.customers TO 'testuser'@'localhost';
FLUSH PRIVILEGES;

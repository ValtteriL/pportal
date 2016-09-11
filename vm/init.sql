CREATE DATABASE vuokrapukki;

CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'example';
USE vuokrapukki;

CREATE TABLE pukit (
    'id' INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    'ika' INT NOT NULL, 
    'puh' VARCHAR(10) NOT NULL,
    'sposti' VARCHAR(50) NOT NULL,
    'latitude' DECIMAL(10,8) NOT NULL,
    'longitude' DECIMAL(11,8) NOT NULL,
    'sade' INT NOT NULL,
    'description' VARCHAR(140),
    'kuva' CHAR(4),
    'salasana' CHAR(128) NOT NULL,
    'arvosana' INT
);

CREATE TABLE asiakkaat (
    'etunimi' VARCHAR() NOT NULL,
    'sukunimi' VARCHAR() NOT NULL,
    'sposti' VARCHAR(50) NOT NULL,
    'puh' VARCHAR(10) NOT NULL
);

GRANT ALL PRIVILEGES ON vuokrapukki.pukit TO 'testuser'@'localhost';
FLUSH PRIVILEGES;


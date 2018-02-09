CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE 'chirp' (
    'id' INTEGER(10) AUTO_INCREMENT NOT NULL,
    'author' VARCHAR(100) NOT NULL,
    'body' VARCHAR(100) NOT NULL,
    'created_at' DATE TIME NOT NULL,
    
    PRIMARY KEY (id)
);
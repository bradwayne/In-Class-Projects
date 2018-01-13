
USE animals_db;

CREATE TABLE people (
    name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30) NULL,
    pet_age INT(30) NULL
);

DESCRIBE people;
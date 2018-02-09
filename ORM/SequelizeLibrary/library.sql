DROP DATABASE IF EXISTS `sequelize_library`;
CREATE DATABASE `sequelize_library`;

USE `sequelize_library`;


CREATE TABLE book
(
	title varchar(100) NOT NULL,
	author varchar(100) NOT NULL,
    genre varchar(100) NOT NULL,
    pege_number INT(10),
);
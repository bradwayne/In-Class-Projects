DROP DATABASE IF EXISTS greatBay_DB;

CREATE DATABASE greatBay_DB;

USE greatBay_DB;

SELECT * FROM auctions;
-- --  
CREATE TABLE auctions (
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(45) NOT NULL,
    starting_bid INT DEFAULT 0,
    highest_bid INT DEFAULT 0,
    PRIMARY KEY (id)
);
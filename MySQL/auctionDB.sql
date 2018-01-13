DROP DATABASE IF EXISTS auctionHouseDB;
CREATE DATABASE auctionHouseDB;

use auctionHouseDB;

SELECT * FROM itemlist;

CREATE TABLE itemList(
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NULL,
  price INT(45) NULL,
  category VARCHAR(45) NULL,
  PRIMARY KEY (id)
);
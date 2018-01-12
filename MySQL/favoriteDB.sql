-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;
-- Make it so all of the following code will affect favorite_db --
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  foods VARCHAR(50) NOT NULL,
  -- Make an numeric column called "score" --
    score INT (10)
);
CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
    score INTEGER(100) NOT NULL,
  -- Make a string column called "artist" --
	artist VARCHAR (50),
  -- Make an integer column called "score" --
	score INT (10)
);
CREATE TABLE favorite_movies (
    movie VARCHAR(100) NOT NULL,
    five_times BOOLEAN DEFAULT FALSE,
    score INT(10)
);
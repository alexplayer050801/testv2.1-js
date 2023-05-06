CREATE DATABASE example_db;

USE example_db;

CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);

INSERT INTO users (id, username, password) VALUES
  (1, 'user1', '1234'),
  (2, 'user2', '1234'),
  (3, 'user3', '1234');

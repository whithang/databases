DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username text,  
  primary key (id)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname text,  
  primary key (id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  message text,
  createdAt datetime NOT NULL,
  user_id int,
  room_id int,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  primary key (id)
);

CREATE TABLE friends (
  user_id int NOT NULL,
  friend_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (friend_id) REFERENCES users(id)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


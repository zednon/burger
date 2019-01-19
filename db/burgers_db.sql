

DROP DATABASE IF Exists burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(50) not null,
davoured BOOLEAN(true) not null,
	PRIMARY KEY (id)
)

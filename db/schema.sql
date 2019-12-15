DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db; 

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
);

-- DROP DATABASE IF EXISTS zk4ieh6yvkd3dr04;

-- CREATE DATABASE zk4ieh6yvkd3dr04;
-- USE zk4ieh6yvkd3dr04; 
-- CREATE TABLE burgers (
--     id INT AUTO_INCREMENT,
--     burger_name VARCHAR(100),
--     devoured BOOLEAN DEFAULT false, 
--     PRIMARY KEY (id)
-- );

-- USE zk4ieh6yvkd3dr04; 
-- SELECT * FROM burgers;
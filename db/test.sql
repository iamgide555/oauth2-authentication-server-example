-- CREATE DATABASE IF NOT EXISTS 'dev';
-- CREATE DATABASE IF NOT EXISTS test;
-- USE dev;
-- CREATE TABLE STUDENTS (  
-- ID INT                           NOT NULL,  
-- NAME VARCHAR (20) NOT NULL,  
-- AGE INT                         NOT NULL,  
-- ADDRESS CHAR (25),  
-- PRIMARY KEY (ID)  
-- );

GRANT ALL ON `db`.* TO 'user'@'%';
USE db;

CREATE TABLE USER (  
user_id         INT         NOT NULL,  
username        VARCHAR(20) NOT NULL,  
password        VARCHAR(100)NOT NULL,  
enable          BOOLEAN     NOT NULL,
access_token    VARCHAR(100),
refresh_token   VARCHAR(100),
access_expire   DATETIME,
refresh_expire  DATETIME,
PRIMARY KEY(user_id)
);

CREATE TABLE PRODUCT (
    product_id      INT         NOT NULL,
    create_date     DATETIME,
    modified_date   DATETIME,
    product_name    VARCHAR(20) NOT NULL,
    price           INT         NOT NULL,
    description     VARCHAR(50) NOT NULL,
    PRIMARY KEY(product_id)
);

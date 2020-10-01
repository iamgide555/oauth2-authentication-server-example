GRANT ALL ON `db`.* TO 'user'@'%';

CREATE TABLE USER_PROFILE (  
user_id         INT         NOT NULL AUTO_INCREMENT,  
username        VARCHAR(20) NOT NULL,  
password        VARCHAR(100)NOT NULL,  
enable          BOOLEAN     NOT NULL    DEFAULT 0,
access_token    VARCHAR(100),
refresh_token   VARCHAR(100),
access_expire   TIMESTAMP DEFAULT NULL,
refresh_expire  TIMESTAMP DEFAULT NULL,
PRIMARY KEY(user_id)
)AUTO_INCREMENT=1;

CREATE TABLE PRODUCT (
    product_id      INT         NOT NULL AUTO_INCREMENT,
    create_date     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_date   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    product_name    VARCHAR(20) NOT NULL,
    price           INT         NOT NULL,
    description     VARCHAR(50) NOT NULL,
    PRIMARY KEY(product_id)
)AUTO_INCREMENT=1;

-- password is 123456 base64
INSERT INTO USER_PROFILE(username,password)
VALUES
('iamgide','1234'),
('testUser','1234')
;

INSERT INTO PRODUCT(product_name,price,description)
VALUES
('Hat',200,'Its a hat bro'),
('Ipad',50000,'You know this is a ipad'),
('Phone',25,'low price phone')
;

USE db;
-- INSERT INTO USER_PROFILE(user_id,username,password)
-- VALUES
-- (1,'iamgide','MTIzNDU2'),
-- (2,'testUser','MTIzNDU2')
-- ;

-- INSERT INTO PRODUCT(product_id,product_name,price,description)
-- VALUES
-- (1,'Hat',200,'Its a hat bro'),
-- (2,'Ipad',50000,'You know this is a ipad'),
-- (3,'Phone',25,'low price phone')
-- ;

-- INSERT INTO Persons(LastName,FirstName,Address,City)
-- VALUES('aa','bb','Bangkok','')
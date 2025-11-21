CREATE DATABASE BitaBitDB;

USE BitaBitDB;

CREATE TABLE
    Users (
        id INT PRIMARY KEY IDENTITY (1, 1),
        username NVARCHAR (50) NOT NULL UNIQUE,
        profile_picture_url NVARCHAR (255),
        first_name NVARCHAR (100) NOT NULL,
        last_name NVARCHAR (100) NOT NULL,
        email NVARCHAR (100) NOT NULL UNIQUE,
        roles NVARCHAR (MAX) NOT NULL,
        level INT DEFAULT 1,
        xp INT DEFAULT 0,
        login_method NVARCHAR (50) NOT NULL,
        password_hash NVARCHAR (255),
        created_at DATETIME DEFAULT GETDATE ()
    )
CREATE VIEW
    wv_Users AS
SELECT
    id,
    username,
    profile_picture_url,
    first_name,
    last_name,
    email,
    roles,
    level,
    xp,
    created_at
FROM
    Users;

CREATE TABLE
    Subject (
        id INT NOT NULL PRIMARY KEY IDENTITY (10000, 1),
        name VARCHAR(64) NOT NULL,
    )
CREATE TABLE
    Scores (
        user_id INT CONSTRAINT fk1_scores FOREIGN KEY (user_id) REFERENCES Users (id)
    )
SELECT
    *
FROM
    wv_Users;

SELECT
    *
FROM
    Users;

DROP VIEW wv_Users;

DROP TABLE Users;
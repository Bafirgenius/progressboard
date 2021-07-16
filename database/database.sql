CREATE DATABASE firstdb;

CREATE TABLE progressboard (
    id SERIAL PRIMARY KEY,
    "todo" VARCHAR(40) NOT NULL,
    "progress" VARCHAR(40) NOT NULL,
    "done" VARCHAR(40) NOT NULL
);

INSERT INTO progressboard (todo, progress, done)
    VALUES ('A', 'B', 'C');
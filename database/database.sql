CREATE DATABASE firstdb;

CREATE TABLE progressboard (
    id SERIAL PRIMARY KEY,
    "todo" VARCHAR(40),
    "progress" VARCHAR(40),
    "done" VARCHAR(40)
);

INSERT INTO progressboard (todo, progress, done)
    VALUES ('A', 'B', 'C');
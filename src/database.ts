import { Pool } from "pg";

export const pool = new Pool({
    user: 'bafir',
    host: 'localhost',
    password: 'bafir24',
    database: 'firstdb',
    port: 5432
})
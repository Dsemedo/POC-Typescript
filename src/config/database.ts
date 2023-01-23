import pg from "pg";

const { Pool } = pg;

const connectionDb = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "douglas123",
  database: "poc_typescript",
});

export { connectionDb };

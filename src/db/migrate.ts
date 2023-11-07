import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// Create a table beforehand
const connectionString = "postgres://postgres:postgres@localhost:5432/template";
const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);

async function main() {
    console.log("Migration started");
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("Migration ended");
    process.exit(0);
}

main().catch((err) => {
    console.log(err);
    process.exit(0);
});

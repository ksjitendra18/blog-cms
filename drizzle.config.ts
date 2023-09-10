import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
console.log("here", process.env.DATABASE_URL);

export default {
  schema: "./src/db/schema/users.ts",
  out: "./src/db/drizzle",
  dbCredentials: {
    connectionString: `${process.env.DATABASE_URL}`,
  },
  driver: "mysql2",
} satisfies Config;

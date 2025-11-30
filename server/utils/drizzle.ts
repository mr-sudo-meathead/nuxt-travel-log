import * as schema from "@@/server/db/schema";
import env from "#shared/env";
import { drizzle } from "drizzle-orm/libsql";

const db = drizzle({
  connection: {
    url: env.TURSO_DATABASE_URL!,
    authToken: env.NODE_ENV === "development" ? undefined : env.TURSO_AUTH_TOKEN,
  },
  casing: "snake_case",
  schema,
});

export default db;

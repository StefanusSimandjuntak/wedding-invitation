import { defineConfig, env } from "prisma/config";

// Use a dummy URL for client generation if DATABASE_URL is not set
const databaseUrl = env("DATABASE_URL", { optional: true }) || "postgresql://user:password@localhost:5432/db?schema=public";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: databaseUrl,
  },
});

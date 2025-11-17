import { defineConfig, env } from "prisma/config";

// Read DATABASE_URL from environment (Next.js automatically loads .env files)
// Use a dummy URL only for Prisma Client generation if DATABASE_URL is not set
// This allows Prisma Client to be generated even without a real database connection
const databaseUrl = process.env.DATABASE_URL || env("DATABASE_URL", { optional: true }) || "postgresql://user:password@localhost:5432/db?schema=public";

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

import { defineConfig, env } from "prisma/config";

// Prisma 7 config. Environment variables are provided by Doppler via varlock
// (we don't use .env), so Prisma CLI commands are wrapped:
//   doppler run -- varlock run -- prisma <cmd>
// See the db:* scripts in package.json.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});

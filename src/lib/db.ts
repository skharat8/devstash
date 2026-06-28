import { PrismaNeon } from "@prisma/adapter-neon";

import { PrismaClient } from "@/generated/prisma/client";

// Neon serverless driver adapter (required in Prisma 7). Node 24 ships a global
// WebSocket, so no `ws` polyfill is needed. DATABASE_URL is injected by Doppler
// via varlock (see the wrapped scripts in package.json).
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaNeon({ connectionString });

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

// Reuse a single client across hot reloads in development to avoid exhausting
// database connections.
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

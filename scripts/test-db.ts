/**
 * Smoke test for the database connection and the Prisma client.
 *
 * Run with: pnpm db:test
 * (wrapped with `doppler run -- varlock run -- tsx` so DATABASE_URL is injected)
 *
 * Verifies connectivity, reads row counts for every model, and performs a
 * write/read/delete roundtrip that cleans up after itself.
 */
import { prisma } from "@/lib/db";

async function main() {
  console.log("🔌 Testing database connection...\n");

  // 1. Connectivity
  await prisma.$queryRaw`SELECT 1`;
  console.log("✅ Connected (SELECT 1 ok)");

  // 2. Row counts for every model
  const [
    users,
    itemTypes,
    items,
    collections,
    tags,
    sessions,
    accounts,
    verifications,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.itemType.count(),
    prisma.item.count(),
    prisma.collection.count(),
    prisma.tag.count(),
    prisma.session.count(),
    prisma.account.count(),
    prisma.verification.count(),
  ]);
  console.log("\n📊 Row counts:");
  console.table({
    users,
    itemTypes,
    items,
    collections,
    tags,
    sessions,
    accounts,
    verifications,
  });

  // 3. Write/read/delete roundtrip (cleaned up afterwards)
  console.log("\n🧪 Running write/read/delete roundtrip...");
  const email = `test-${Date.now()}@devstash.test`;

  const created = await prisma.user.create({
    data: { name: "DB Test User", email },
  });
  console.log(`  • created user ${created.id}`);

  const found = await prisma.user.findUnique({ where: { id: created.id } });
  if (!found) throw new Error("created user could not be read back");
  console.log("  • read user back");

  await prisma.user.delete({ where: { id: created.id } });
  const afterDelete = await prisma.user.findUnique({
    where: { id: created.id },
  });
  if (afterDelete) throw new Error("user was not deleted");
  console.log("  • deleted user (cleaned up)");

  console.log("\n✅ All database checks passed.");
}

main()
  .catch((err) => {
    console.error("\n❌ Database test failed:");
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

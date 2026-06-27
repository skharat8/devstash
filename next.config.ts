import { varlockNextConfigPlugin } from "@varlock/nextjs-integration/plugin";
import type { NextConfig } from "next";

const withVarlock = varlockNextConfigPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withVarlock(nextConfig);

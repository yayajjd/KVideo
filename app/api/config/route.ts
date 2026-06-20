/**
 * Config API Route (Simplified)
 * Only returns non-auth configuration now.
 * Auth has moved to /api/auth.
 */

import { NextResponse } from 'next/server';

export const runtime = 'edge';

const SUBSCRIPTION_SOURCES =
  process.env.SUBSCRIPTION_SOURCES || process.env.NEXT_PUBLIC_SUBSCRIPTION_SOURCES;

export async function GET() {
  // 临时打印环境变量
  console.log("ACCESS_PASSWORD:", process.env.ACCESS_PASSWORD);
  console.log("PERSIST_PASSWORD:", process.env.PERSIST_PASSWORD);

  return NextResponse.json({
    subscriptionSources: SUBSCRIPTION_SOURCES,
    hasEnvPassword: !!process.env.ACCESS_PASSWORD,
    persistPassword: !!process.env.PERSIST_PASSWORD,
  });
}

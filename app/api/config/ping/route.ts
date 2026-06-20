import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  // 打印环境变量
  console.log("ACCESS_PASSWORD:", process.env.ACCESS_PASSWORD);
  console.log("PERSIST_PASSWORD:", process.env.PERSIST_PASSWORD);
  console.log("SUBSCRIPTION_SOURCES:", process.env.SUBSCRIPTION_SOURCES);

  // 返回 JSON 响应
  return NextResponse.json({
    accessPassword: process.env.ACCESS_PASSWORD ? "已设置" : "未设置",
    persistPassword: process.env.PERSIST_PASSWORD ? "已设置" : "未设置",
    subscriptionSources: process.env.SUBSCRIPTION_SOURCES || "未设置",
  });
}

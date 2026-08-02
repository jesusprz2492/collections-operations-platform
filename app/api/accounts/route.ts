import { NextResponse } from "next/server";
import { prioritizeAccounts } from "@/lib/analytics";
import { accounts } from "@/lib/data";

export function GET() {
  return NextResponse.json({ data: prioritizeAccounts(accounts), synthetic: true });
}


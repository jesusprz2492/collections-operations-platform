import { NextResponse } from "next/server";
import { summarizePortfolio } from "@/lib/analytics";
import { accounts } from "@/lib/data";

export function GET() {
  return NextResponse.json(summarizePortfolio(accounts));
}


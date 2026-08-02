import { accounts } from "@/lib/data";

function csvCell(value: string | number): string {
  const text = String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

export function GET() {
  const header = ["account_id", "customer", "balance", "days_past_due", "risk", "next_action"];
  const rows = accounts.map((account) => [
    account.id,
    account.customer,
    account.balance,
    account.daysPastDue,
    account.risk,
    account.nextAction,
  ]);
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");

  return new Response(csv, {
    headers: {
      "content-disposition": 'attachment; filename="atlas-synthetic-accounts.csv"',
      "content-type": "text/csv; charset=utf-8",
      "x-data-classification": "synthetic",
    },
  });
}


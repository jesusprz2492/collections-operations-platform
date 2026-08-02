import assert from "node:assert/strict";
import test from "node:test";
import { summarizePortfolio, prioritizeAccounts } from "../lib/analytics";
import { accounts } from "../lib/data";
import { GET as exportCsv } from "../app/api/export/route";

test("portfolio summary is derived from synthetic accounts", () => {
  const summary = summarizePortfolio(accounts);
  assert.equal(summary.totalReceivable, 18270);
  assert.equal(summary.overdueReceivable, 11260);
  assert.equal(summary.overdueAccounts, 2);
});

test("high-risk accounts are prioritized", () => {
  const ordered = prioritizeAccounts(accounts);
  assert.equal(ordered[0].risk, "high");
  assert.equal(ordered.at(-1)?.risk, "low");
});

test("CSV export is synthetic and downloadable", async () => {
  const response = exportCsv();
  const body = await response.text();
  assert.match(response.headers.get("content-disposition") ?? "", /atlas-synthetic-accounts\.csv/);
  assert.equal(response.headers.get("x-data-classification"), "synthetic");
  assert.match(body, /Northwind Bicycle Studio/);
  assert.doesNotMatch(body, /@/);
});

import assert from "node:assert/strict";
import test from "node:test";
import { summarizePortfolio, prioritizeAccounts } from "../lib/analytics";
import { accounts } from "../lib/data";

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


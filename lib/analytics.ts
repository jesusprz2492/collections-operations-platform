import type { CollectionAccount, PortfolioSummary } from "./types";

export function summarizePortfolio(records: CollectionAccount[]): PortfolioSummary {
  const totalReceivable = records.reduce((sum, item) => sum + item.balance, 0);
  const overdue = records.filter((item) => item.status === "overdue");
  const promises = records.filter((item) => item.status === "promise");

  return {
    totalReceivable,
    overdueReceivable: overdue.reduce((sum, item) => sum + item.balance, 0),
    promiseAmount: promises.reduce((sum, item) => sum + item.balance, 0),
    overdueAccounts: overdue.length,
    recoveryRate: 0.684,
  };
}

export function prioritizeAccounts(records: CollectionAccount[]): CollectionAccount[] {
  const riskWeight = { high: 3, medium: 2, low: 1 } as const;
  return [...records].sort((a, b) => {
    const riskDifference = riskWeight[b.risk] - riskWeight[a.risk];
    return riskDifference || b.daysPastDue - a.daysPastDue || b.balance - a.balance;
  });
}


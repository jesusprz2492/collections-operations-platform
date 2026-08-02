export type RiskBand = "low" | "medium" | "high";
export type AccountStatus = "current" | "promise" | "overdue";

export interface CollectionAccount {
  id: string;
  customer: string;
  balance: number;
  daysPastDue: number;
  status: AccountStatus;
  risk: RiskBand;
  nextAction: string;
  dueDate: string;
}

export interface PortfolioSummary {
  totalReceivable: number;
  overdueReceivable: number;
  promiseAmount: number;
  overdueAccounts: number;
  recoveryRate: number;
}


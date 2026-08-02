import type { CollectionAccount } from "./types";

// Fictional records created exclusively for this public demonstration.
export const accounts: CollectionAccount[] = [
  {
    id: "ACC-1042",
    customer: "Northwind Bicycle Studio",
    balance: 4820,
    daysPastDue: 18,
    status: "promise",
    risk: "medium",
    nextAction: "Review payment promise",
    dueDate: "2026-08-06",
  },
  {
    id: "ACC-1087",
    customer: "Lumen Office Supply",
    balance: 7350,
    daysPastDue: 41,
    status: "overdue",
    risk: "high",
    nextAction: "Send approved email reminder",
    dueDate: "2026-08-02",
  },
  {
    id: "ACC-1103",
    customer: "Harbor Field Services",
    balance: 2190,
    daysPastDue: 0,
    status: "current",
    risk: "low",
    nextAction: "No action required",
    dueDate: "2026-08-21",
  },
  {
    id: "ACC-1118",
    customer: "Cedar & Stone Market",
    balance: 3910,
    daysPastDue: 9,
    status: "overdue",
    risk: "medium",
    nextAction: "Prepare account summary",
    dueDate: "2026-08-04",
  }
];


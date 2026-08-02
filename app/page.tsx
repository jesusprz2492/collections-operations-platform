import { summarizePortfolio, prioritizeAccounts } from "@/lib/analytics";
import { accounts } from "@/lib/data";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function Dashboard() {
  const summary = summarizePortfolio(accounts);
  const prioritized = prioritizeAccounts(accounts);

  return (
    <main>
      <aside>
        <div className="brand-mark">A</div>
        <div>
          <strong>Atlas</strong>
          <span>Collections Operations</span>
        </div>
        <nav aria-label="Primary navigation">
          <a className="active" href="#overview">Overview</a>
          <a href="#accounts">Accounts</a>
          <a href="#workflow">Work queue</a>
          <a href="#reports">Reports</a>
        </nav>
        <p className="demo-note">Synthetic portfolio data<br />No customer information</p>
      </aside>

      <section className="content" id="overview">
        <header>
          <div>
            <p className="eyebrow">OPERATIONS CONTROL ROOM</p>
            <h1>Receivables, prioritized.</h1>
            <p>One accountable view of balances, promises, risk, and the next human action.</p>
          </div>
          <button type="button">Export demo report</button>
        </header>

        <section className="metrics" aria-label="Portfolio metrics">
          <article><span>Total receivable</span><strong>{money.format(summary.totalReceivable)}</strong><small>Across {accounts.length} demo accounts</small></article>
          <article><span>Overdue balance</span><strong>{money.format(summary.overdueReceivable)}</strong><small>{summary.overdueAccounts} accounts need action</small></article>
          <article><span>Promises active</span><strong>{money.format(summary.promiseAmount)}</strong><small>Human-reviewed commitments</small></article>
          <article><span>Recovery rate</span><strong>{Math.round(summary.recoveryRate * 100)}%</strong><small>Fictional rolling period</small></article>
        </section>

        <section className="panel" id="accounts">
          <div className="panel-heading">
            <div><p className="eyebrow">PRIORITY QUEUE</p><h2>Accounts requiring attention</h2></div>
            <span>{prioritized.length} records</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Account</th><th>Balance</th><th>Age</th><th>Risk</th><th>Next action</th></tr></thead>
              <tbody>
                {prioritized.map((account) => (
                  <tr key={account.id}>
                    <td><strong>{account.customer}</strong><small>{account.id}</small></td>
                    <td>{money.format(account.balance)}</td>
                    <td>{account.daysPastDue ? `${account.daysPastDue} days` : "Current"}</td>
                    <td><span className={`badge ${account.risk}`}>{account.risk}</span></td>
                    <td>{account.nextAction}<small>Due {account.dueDate}</small></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="workflow" id="workflow">
          <article><span>01</span><h3>Segment</h3><p>Risk rules and aging signals create an explainable queue.</p></article>
          <article><span>02</span><h3>Review</h3><p>An operator verifies context before any outbound action.</p></article>
          <article><span>03</span><h3>Record</h3><p>Promises and outcomes remain auditable across the workflow.</p></article>
        </section>
      </section>
    </main>
  );
}


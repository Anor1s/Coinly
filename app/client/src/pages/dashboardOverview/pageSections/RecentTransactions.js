import { SectionHeading, TableUi, TransactionsTable } from "../Index.js";
const RecentTransactions  = {
  render() {
    return `
      <section class="w-full flex flex-col gap-sm laptop:flex-[2] laptop:min-w-0">
        ${SectionHeading.render('Recent Transactions')}
        <div class="h-[320px]">
          ${TableUi.renderMainLayout(false)}
        </div>
      </section>
    `;
  },

  init() {
    TransactionsTable.init();
  }
};

export default RecentTransactions;
import { SectionHeading, TableUi, TransactionsTable } from "../Index.js";
const RecentTransactions  = {
  render() {
    return `
      <section class="w-full flex flex-col gap-sm laptop:w-2/5">
        ${SectionHeading.render('Recent Transactions')}
        <div class="h-[576px]">
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
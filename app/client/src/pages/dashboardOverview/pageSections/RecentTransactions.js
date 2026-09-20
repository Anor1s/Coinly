import { SectionHeading, TableUi, TransactionsTable } from "../Index.js";
const RecentTransactions  = {
  render() {
    return `
      <section class="min-h-include-top min-[1000px]:min-h-0 min-[1000px]:h-[460px] laptop:h-[340px] w-full min-w-0 grid grid-rows-[auto_1fr] gap-sm">
        ${SectionHeading.render('Recent Transactions')}
        <div class="min-h-0 min-w-0">
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
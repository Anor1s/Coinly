import {
  SectionHeading,
  TransactionsTable,
  AddTransactionModal,
  AddTransactionIcon,
} from '../index.js';

const TransactionsSection = {
  render() {
    return `
      <section class="h-screen-pad laptop:h-include-top w-full flex flex-col gap-sm">
        <div class="flex items-center justify-between gap-base">
          ${SectionHeading.render('All transactions')}
          <button
            type="button"
            id="open-add-transaction-btn"
            class="flex items-center gap-xs px-[16px] h-button rounded-md gradient-primary text-text-secondary font-bold shrink-0"
          >
            <div
              class="w-6 h-6 bg-text-secondary"
              style="-webkit-mask: url('${AddTransactionIcon}') no-repeat center / contain;
                      mask: url('${AddTransactionIcon}') no-repeat center / contain;"
            ></div>
            Add New Transaction
          </button>
        </div>
        ${TransactionsTable.render()}
      </section>
    `;
  },

  init() {
    TransactionsTable.init();
    document.getElementById('open-add-transaction-btn')?.addEventListener('click', () => {
      AddTransactionModal.open();
    });
  }
};


export default TransactionsSection;

import { AddTransactionDetails, CloseIcon } from './index.js';

const AddTransactionModal = {
  escHandler: null,

  render() {
    return `
      <div
        id="add-transaction-modal"
        class="fixed inset-0 z-[100] flex justify-end backdrop-blur-xs bg-text-primary/40 animate-in fade-in duration-200"
      >
        <div class="w-full laptop:w-[480px] h-full bg-surface border-l-2 border-text-primary overflow-y-auto p-[16px] tablet:p-[24px] flex flex-col gap-base">
          <button
            type="button"
            id="close-add-transaction-btn"
            class="ml-auto p-[6px] rounded-full flex items-center justify-center hover:bg-surface-response transition-colors duration-200"
          >
            <img src="${CloseIcon}" alt="close" width="20" height="20" loading="lazy" />
          </button>
          ${AddTransactionDetails.render()}
        </div>
      </div>
    `;
  },

  open() {
    const existing = document.getElementById('add-transaction-modal');
    if (existing) existing.remove();

    document.body.insertAdjacentHTML('beforeend', this.render());
    document.body.style.overflow = 'hidden';

    this.setupEventListeners();
    AddTransactionDetails.init();
  },

  close() {
    const modal = document.getElementById('add-transaction-modal');
    if (!modal) return;

    modal.remove();
    document.body.style.overflow = '';

    if (this.escHandler) {
      document.removeEventListener('keydown', this.escHandler);
      this.escHandler = null;
    }
  },

  setupEventListeners() {
    document.getElementById('close-add-transaction-btn')?.addEventListener('click', () => this.close());

    this.escHandler = (e) => {
      if (e.key === 'Escape') this.close();
    };
    document.addEventListener('keydown', this.escHandler);

    document.getElementById('add-transaction-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'add-transaction-modal') this.close();
    });
  }
};

export default AddTransactionModal;

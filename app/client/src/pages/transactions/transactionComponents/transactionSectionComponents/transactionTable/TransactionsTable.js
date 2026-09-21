import {
  FilterButtonsGetData, SortByButtonsGetData,
  TransactionStore, TableUi, TableLogic, TablePagination, AppStore,
  TransactionModal
} from '../../../index.js';

const TransactionTable = {
  currentPage: 1,
  itemsPerPage: 0,
  totalPages: 0,
  allData: [],
  filteredData: [],
  resizeTimeout: null,

  render() {
    return TableUi.renderMainLayout();
  },

  applyFilters() {
    const filters = FilterButtonsGetData();
    const sort = SortByButtonsGetData();

    const filtered = this.allData.filter(t => !TableLogic.isFilteredOut(t, filters));
    this.filteredData = TableLogic.applySort(filtered, sort);

    this.currentPage = 1;
    this.paginate();
  },

  paginate() {
    if (this.itemsPerPage <= 0) {
      const table = document.getElementById('all-transactions-table');
      if (table) this.itemsPerPage = TablePagination.calculateItemsPerPage(table);
    }

    this.totalPages = Math.max(1, Math.ceil(this.filteredData.length / (this.itemsPerPage || 1)));
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    this.updateView();
  },

  async rebuildTable() {
    const table = document.getElementById('all-transactions-table');
    if (!table) return;

    const newItemsPerPage = TablePagination.calculateItemsPerPage(table);

    if (newItemsPerPage !== this.itemsPerPage && newItemsPerPage > 0) {
      this.itemsPerPage = newItemsPerPage;
      this.paginate();
    }
  },

  updateView() {
    const table = document.getElementById('all-transactions-table');
    if (!table) return;

    const perPage = this.itemsPerPage > 0 ? this.itemsPerPage : (this.filteredData.length || 1);
    const start = (this.currentPage - 1) * perPage;
    const pageItems = this.filteredData.slice(start, start + perPage);

    const currentCurrency = AppStore.currentCurrency;
    TableUi.renderData(table, pageItems, currentCurrency);

    const paginationContainer = document.getElementById('pagination-container');
    if (paginationContainer) {
      paginationContainer.innerHTML = TableUi.renderPagination(this.totalPages, this.currentPage - 1);
    }
  },

  async init() {
    const table = await this.waitForTable();
    if (!table) return;

    window.addEventListener('transactionAdded', async () => {
      await this.refreshTableData();
    });

    try {
      await AppStore.fetchInitialCurrency();
      this.itemsPerPage = TablePagination.calculateItemsPerPage(table);
      await this.loadData();
      this.setupEventListeners();
    } catch (error) {
      console.error("[Table] Init error:", error);
      table.innerHTML = `<li class="p-10 text-center text-red-400">Error loading data.</li>`;
    }
  },

  waitForTable(maxAttempts = 15) {
    const existing = document.getElementById('all-transactions-table');
    if (existing) return Promise.resolve(existing);

    return new Promise(resolve => {
      const check = (attemptsLeft) => {
        const table = document.getElementById('all-transactions-table');
        if (table || attemptsLeft <= 0) {
          resolve(table);
          return;
        }
        setTimeout(() => check(attemptsLeft - 1), 16);
      };
      setTimeout(() => check(maxAttempts), 16);
    });
  },

  async loadData() {
    const table = document.getElementById('all-transactions-table');
    if (table) {
      table.innerHTML = `<li class="text-center p-10 text-text-secondary animate-pulse">Завантаження...</li>`;
    }

    try {
      const response = await TransactionStore.fetchTransactions();
      this.allData = response?.transactions || [];
      this.applyFilters();
    } catch (error) {
      console.error("[Table] Load error:", error);
    }
  },

  async refreshTableData() {
    if (TransactionStore.clearCache) {
      TransactionStore.clearCache();
    }
    await this.loadData();
  },

  setupEventListeners() {
    this.transactionEventListeners();
    this.paginationEventListeners();
  },

  paginationEventListeners() {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer?.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      const action = btn.dataset.action;
      let targetPage = this.currentPage;

      if (action === 'prev' && this.currentPage > 1) targetPage--;
      else if (action === 'next' && this.currentPage < this.totalPages) targetPage++;
      else if (action === 'page') targetPage = parseInt(btn.dataset.page) + 1;

      if (targetPage !== this.currentPage) {
        this.currentPage = targetPage;
        this.updateView();
      }
    });

    window.addEventListener("resize", () => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => this.rebuildTable(), 200);
    });
  },

  transactionEventListeners() {
    const table = document.getElementById('all-transactions-table');
    if (!table) return;

    table.addEventListener('click', (e) => {
      const transactionRow = e.target.closest('.transaction');

      if (transactionRow) {
        const transactionId = transactionRow.id;
        const transactionData = this.allData.find(
          t => String(t.id) === String(transactionId)
        );

        if (transactionData) {
          const currencySymbol = AppStore.currentCurrency;
          TransactionModal.open(transactionData, currencySymbol);
        }
      }
    });
  },
};

window.updateTransactionFilters = () => {
  if (window.TransactionList) {
    window.TransactionList.applyFilters();
  }
};

window.updateTransactionSort = () => {
  if (window.TransactionList) {
    window.TransactionList.applyFilters();
  }
};

window.TransactionList = TransactionTable;

export default TransactionTable;

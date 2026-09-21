import TransactionService  from '../services/TransactionService.js';

const TransactionStore = {
  data: null,
  pending: null,

  async fetchTransactions() {
    if (this.data) {
      return this.data;
    }

    if (this.pending) {
      return this.pending;
    }

    this.pending = TransactionService.getAll()
      .then(response => {
        this.data = response;
        this.pending = null;
        return response;
      })
      .catch(err => {
        this.pending = null;
        console.error("Store error:", err);
        throw err;
      });

    return this.pending;
  },

  clearCache() {
    this.data = null;
    this.pending = null;
  }
};


export default TransactionStore;

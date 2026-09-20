const Item = {
  render(item) {
    let formattedValue;

    const isTransactions = item.heading.toLowerCase().includes('transactions');
    const isSummaryCard = !isTransactions;

    if (isSummaryCard && item.value >= 1000000) {
      const millions = item.value / 1000000;
      formattedValue = new Intl.NumberFormat('uk-UA', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(millions) + 'M';
    } else {
      const decimals = isTransactions ? 0 : 2;

      formattedValue = new Intl.NumberFormat('uk-UA', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(item.value).replace(/\s/g, ' ');
    }

    return `
      <li class="flex items-center gap-5 bg-card border-2 border-border rounded-lg px-6 py-5">
        <div class="w-14 h-14 rounded-md gradient-primary flex items-center justify-center shrink-0">
          <div
            class="w-6 h-6 bg-text-secondary"
            style="-webkit-mask: url('${item.icon}') no-repeat center / contain;
                    mask: url('${item.icon}') no-repeat center / contain;"
          ></div>
        </div>
        <div class="flex flex-col min-w-0">
          <span class="text-sm text-text-tertiary uppercase tracking-wide truncate">${item.heading}</span>
          <span class="text-2xl font-bold text-text-primary truncate">
            <span class="text-text-tertiary font-medium mr-1 text-lg">${item.currency}</span>${formattedValue}
          </span>
        </div>
      </li>
    `;
  }
};

export default Item;

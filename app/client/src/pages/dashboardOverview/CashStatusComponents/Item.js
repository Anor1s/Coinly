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
      <li class="flex flex-col gap-4 bg-surface border border-surface-secondary rounded-2xl p-5">
        <div class="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
          <div
            class="w-5 h-5 bg-text-secondary"
            style="-webkit-mask: url('${item.icon}') no-repeat center / contain;
                    mask: url('${item.icon}') no-repeat center / contain;"
          ></div>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-xs text-text-tertiary uppercase tracking-wide">${item.heading}</span>
          <span class="text-xl font-bold text-text-primary">
            <span class="text-text-tertiary font-medium mr-1">${item.currency}</span>${formattedValue}
          </span>
        </div>
      </li>
    `;
  }
};

export default Item;

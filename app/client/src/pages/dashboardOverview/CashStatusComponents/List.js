import { Item, SummaryService, ItemsData } from '../Index.js';

const List = {
  render() {
    return `
      <ul id="overview-cards-list" class="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5 gap-sm">
        <li class="col-span-full text-text-tertiary animate-pulse p-4">Loading stats...</li>
      </ul>
    `;
  },

  async init() {

    window.addEventListener('currencyChanged', async () => {
      await this.updateCards();
    });

    window.addEventListener('transactionAdded', async () => {
      await this.updateCards();
    });

    await this.updateCards();
  },
  async updateCards() {
    const listElement = document.getElementById('overview-cards-list');
    if (!listElement) return;

    try {
      const response = await SummaryService.getSummary();
      const summary = response.summary;

      const dynamicItems = ItemsData.formatDashboardItems(summary);

      listElement.innerHTML = dynamicItems.map(item => Item.render(item)).join('\n');

    } catch (error) {
      console.error("Dashboard List Error:", error);
      listElement.innerHTML = `<li class="col-span-full text-text-accent p-4">Error loading data</li>`;
    }
  }
};

export default List;
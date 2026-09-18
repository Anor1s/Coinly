import {
  CashStatus,
  Diagrams,
  RecentTransactions,
} from "./Index.js";

const Dashboard = {
  render() {
    return `
      <div class="w-full h-full overflow-y-auto p-[16px] tablet:px-[24px] flex flex-col gap-lg">
        ${CashStatus.render()}
        <div class="flex flex-col laptop:flex-row gap-lg">
          ${Diagrams.render()}
          ${RecentTransactions.render()}
        </div>
      </div>
    `;
  },

  init() {
    CashStatus.init();
    Diagrams.init();
    RecentTransactions.init();
  }
};

export default Dashboard;


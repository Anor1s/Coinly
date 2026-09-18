import {
  CashStatus,
  Diagrams,
  RecentTransactions,
} from "./Index.js";

const Dashboard = {
  render() {
    return `
      <div class="w-full p-[16px] tablet:px-[24px] flex flex-col laptop:flex-row gap-lg">
        ${CashStatus.render()}
        <div class="flex flex-col laptop:flex-row gap-lg flex-1 min-w-0">
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


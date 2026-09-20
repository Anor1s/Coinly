import {
  CashStatus,
  Diagrams,
  RecentTransactions,
} from "./Index.js";

const Dashboard = {
  render() {
    return `
      <div class="w-full p-[16px] tablet:px-[24px] grid grid-rows-[auto_auto] content-center gap-lg laptop:gap-[22px] laptop:h-full">
        ${CashStatus.render()}
        <div class="grid gap-lg min-[1000px]:grid-cols-[3fr_2fr]">
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


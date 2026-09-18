import {SectionHeading, PieChartCreate, StackedBarChartCreate } from "../Index.js";

const PieChartId = "dashboardPieChart";
const StackedBarChartId = "dashboardStackedBarChart"

const Charts = {
  render() {
    return `
      <section class="w-full flex flex-col gap-sm laptop:w-3/5">
        ${SectionHeading.render('Charts')}
        <div class="flex flex-col gap-base mobile:flex-row laptop:flex-col">
          <div class="flex-1 min-h-[280px] laptop:min-h-[260px]">
            ${PieChartCreate.render(PieChartId)}
          </div>
          <div class="flex-1 min-h-[280px] laptop:min-h-[260px]">
            ${StackedBarChartCreate.render(StackedBarChartId)}
          </div>
        </div>
      </section>
    `;
  },

  init() {
    PieChartCreate.init(PieChartId);
    StackedBarChartCreate.init(StackedBarChartId);
  }
};

export default Charts;


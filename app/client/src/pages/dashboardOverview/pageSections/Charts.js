import {SectionHeading, PieChartCreate, StackedBarChartCreate } from "../Index.js";

const PieChartId = "dashboardPieChart";
const StackedBarChartId = "dashboardStackedBarChart"

const Charts = {
  render() {
    return `
      <section class="w-full flex flex-col gap-sm laptop:flex-[3] laptop:min-w-0">
        ${SectionHeading.render('Charts')}
        <div class="flex flex-col gap-base laptop:flex-row">
          <div class="h-[280px] laptop:flex-1 laptop:min-w-0">
            ${PieChartCreate.render(PieChartId)}
          </div>
          <div class="h-[280px] laptop:flex-1 laptop:min-w-0">
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


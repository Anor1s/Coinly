import {SectionHeading, PieChartCreate, StackedBarChartCreate } from "../Index.js";

const PieChartId = "dashboardPieChart";
const StackedBarChartId = "dashboardStackedBarChart"

const Charts = {
  render() {
    return `
      <section class="w-full flex flex-col gap-sm laptop:w-3/5">
        ${SectionHeading.render('Charts')}
        <div class="flex flex-col gap-base mobile:flex-row laptop:flex-col">
          <div class="h-[400px] laptop:h-[280px] w-full shrink-0">
            ${PieChartCreate.render(PieChartId)}
          </div>
          <div class="h-[400px] laptop:h-[280px] w-full shrink-0">
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


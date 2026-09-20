import {SectionHeading, PieChartCreate, StackedBarChartCreate } from "../Index.js";

const PieChartId = "dashboardPieChart";
const StackedBarChartId = "dashboardStackedBarChart"

const Charts = {
  render() {
    return `
      <section class="min-h-include-top min-[1000px]:min-h-0 min-[1000px]:h-[460px] laptop:h-[340px] w-full min-w-0 grid grid-rows-[auto_1fr] gap-sm">
        ${SectionHeading.render('Charts')}
        <div class="grid grid-rows-2 min-[1000px]:grid-rows-1 min-[1000px]:grid-cols-2 gap-base min-h-0">
          <div class="min-h-0 min-w-0">
            ${PieChartCreate.render(PieChartId)}
          </div>
          <div class="min-h-0 min-w-0">
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


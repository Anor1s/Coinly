import { SectionHeading, PieChartCreate, LineChartCreate } from "../index.js";

const PieAndLineChartsSection = {
  PieChartId: "analyticsPieChart",
  LineChartId: "analyticsLineChart",

  render() {
    return `
      <section class="min-h-include-top w-full grid grid-rows-[auto_1fr] gap-sm">
        ${SectionHeading.render('Other')}
        <div class="grid grid-rows-2 min-h-0 w-full gap-base">
          ${PieChartCreate.render(this.PieChartId)}
          ${LineChartCreate.render(this.LineChartId)}
        </div>
      </section>
    `
  },

  init() {
    PieChartCreate.init(this.PieChartId);
    LineChartCreate.init(this.LineChartId);
  }
};

export default PieAndLineChartsSection;
import { SectionHeading, HorizontalBarChartCreate } from "../index.js";

const HorizontalBarChartSection = {
  HorizontalBarChartId: 'analyticsHorizontalBarChart',

  render() {
    return `
      <section class="min-h-include-top w-full grid grid-rows-[auto_1fr] gap-base">
        ${SectionHeading.render('Spending by category')}
        <div class="min-h-0 w-full">
          ${HorizontalBarChartCreate.render(this.HorizontalBarChartId)}
        </div>
      </section>
    `
  },

  init() {
    HorizontalBarChartCreate.init(this.HorizontalBarChartId);
  }
};

export default HorizontalBarChartSection;
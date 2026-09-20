import {
  StackedBarChartCreate,
  SectionHeading,
  TimeRangeModal
} from "../index.js";

const FiltersAndStackedBarChartSection = {
  StackedBarChartId: 'analyticsStackedBarChart',

  render() {
    return `
      <section class="min-h-include-top w-full grid grid-rows-[auto_1fr] gap-base">
        <div class="w-full flex flex-col gap-sm mobile:flex-row mobile:items-center mobile:justify-between">
          ${SectionHeading.render('Budget Allocation')}
          <button
            type="button"
            id="open-time-range-btn"
            class="px-[16px] h-button rounded-md gradient-primary text-text-secondary font-bold w-fit"
          >
            Time Range
          </button>
        </div>

        <div class="min-h-0 w-full">
            ${StackedBarChartCreate.render(this.StackedBarChartId)}
        </div>
      </section>
    `
  },

  init() {
    StackedBarChartCreate.init(this.StackedBarChartId);
    document.getElementById('open-time-range-btn')?.addEventListener('click', () => {
      TimeRangeModal.open();
    });
  }
};

export default FiltersAndStackedBarChartSection;

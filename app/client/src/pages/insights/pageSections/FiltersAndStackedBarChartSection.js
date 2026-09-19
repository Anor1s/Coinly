import {
  StackedBarChartCreate,
  SectionHeading,
  TimeRangeModal
} from "../index.js";

const FiltersAndStackedBarChartSection = {
  StackedBarChartId: 'analyticsStackedBarChart',

  render() {
    return `
      <section class="h-full w-full flex flex-col gap-base">
        <div class="h-fit w-full flex flex-col gap-sm">
          ${SectionHeading.render('Budget Allocation')}
          <button
            type="button"
            id="open-time-range-btn"
            class="px-[16px] h-button rounded-md gradient-primary text-text-secondary font-bold w-fit"
          >
            Time Range
          </button>
        </div>

        <div class="h-screen-pad mobile:h-full w-full flex flex-col gap-sm">
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

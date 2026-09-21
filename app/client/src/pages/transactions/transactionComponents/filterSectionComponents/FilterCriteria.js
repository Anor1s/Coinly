import {
  SectionHeading, FilterButtonsData, FilterButtonsList,
  InitManagerClear, InitManagerCreate, FilterButtonsReset, CloseIcon
} from '../../index.js';

const FilterCriteria = {
  render() {
    InitManagerClear(FilterButtonsData);

    return `
      <div class="  w-full flex flex-col gap-base">
        <div class=" flex flex-col gap-sm">
          <div class="flex flex-col gap-sm mobile:flex-row mobile:items-center mobile:justify-between">
            ${SectionHeading.render('Filter Criteria')}
            <button
              type="button"
              id="reset-filters-btn"
              class="flex items-center justify-center gap-xs px-[16px] h-button rounded-md gradient-primary text-text-secondary font-bold w-fit"
            >
              <img src="${CloseIcon}" alt="" class="w-5 h-5 brightness-0" />
              Reset Filters
            </button>
          </div>
          ${FilterButtonsList.render(FilterButtonsData)}
        </div>
      </div>
    `;
  },

  init() {
    InitManagerCreate(FilterButtonsData);

    document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
      FilterButtonsReset();
    });
  }
};

export default FilterCriteria;

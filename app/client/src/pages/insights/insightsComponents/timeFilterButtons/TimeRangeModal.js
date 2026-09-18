import {
  SectionHeading,
  FilterButtonsList,
  FilterButtonsData,
  InitManagerCreate,
  InitManagerClear,
  CloseIcon
} from '../../index.js';

const TimeRangeModal = {
  escHandler: null,

  render() {
    InitManagerClear(FilterButtonsData);

    return `
      <div
        id="time-range-modal"
        class="fixed inset-0 z-[100] flex justify-end backdrop-blur-xs bg-text-primary/40 animate-in fade-in duration-200"
      >
        <div class="w-full laptop:w-[420px] h-full bg-surface border-l-2 border-text-primary overflow-y-auto p-[16px] tablet:p-[24px] flex flex-col gap-base">
          <button
            type="button"
            id="close-time-range-btn"
            class="ml-auto p-[6px] rounded-full flex items-center justify-center hover:bg-surface-response transition-colors duration-200"
          >
            <img src="${CloseIcon}" alt="close" width="20" height="20" loading="lazy" />
          </button>
          ${SectionHeading.render('Time Range')}
          ${FilterButtonsList.render(FilterButtonsData)}
        </div>
      </div>
    `;
  },

  open() {
    const existing = document.getElementById('time-range-modal');
    if (existing) existing.remove();

    document.body.insertAdjacentHTML('beforeend', this.render());
    document.body.style.overflow = 'hidden';

    this.setupEventListeners();
    InitManagerCreate(FilterButtonsData);
  },

  close() {
    const modal = document.getElementById('time-range-modal');
    if (!modal) return;

    modal.remove();
    document.body.style.overflow = '';

    if (this.escHandler) {
      document.removeEventListener('keydown', this.escHandler);
      this.escHandler = null;
    }
  },

  setupEventListeners() {
    document.getElementById('close-time-range-btn')?.addEventListener('click', () => this.close());

    this.escHandler = (e) => {
      if (e.key === 'Escape') this.close();
    };
    document.addEventListener('keydown', this.escHandler);

    document.getElementById('time-range-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'time-range-modal') this.close();
    });
  }
};

export default TimeRangeModal;

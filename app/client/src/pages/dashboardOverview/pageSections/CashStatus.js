import { SectionHeading, CardsList } from '../Index.js'

const CashStatus = {
  render() {
    return `
      <section class="w-full laptop:w-[260px] flex flex-col gap-sm shrink-0">
        ${SectionHeading.render('Cash Status')}
        ${CardsList.render()}
      </section>
    `;
  },

  init() {
    CardsList.init();
  }
};
export default CashStatus;


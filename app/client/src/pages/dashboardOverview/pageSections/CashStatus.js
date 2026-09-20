import { SectionHeading, CardsList } from '../Index.js'

const CashStatus = {
  render() {
    return `
      <section class="w-full flex flex-col gap-sm">
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


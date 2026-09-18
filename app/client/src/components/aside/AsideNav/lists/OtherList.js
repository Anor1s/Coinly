import { AsideNavItem, OtherItemsData } from '../../index.js';

const OtherList = {
  render() {
    return `
      <ul class="flex items-center gap-xs tablet:gap-sm shrink-0">
        ${OtherItemsData.map(item => AsideNavItem.render(item)).join('\n')}
      </ul>
    `;
  }
};

export default OtherList;

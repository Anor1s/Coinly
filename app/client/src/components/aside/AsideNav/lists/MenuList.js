import { AsideNavItem, MenuItemsData } from '../../index.js';

const MenuList = {
  render() {
    return `
      <ul class="flex items-center gap-xs tablet:gap-sm shrink-0">
        ${MenuItemsData.map(item => AsideNavItem.render(item)).join('\n')}
      </ul>
    `;
  }
};

export default MenuList;

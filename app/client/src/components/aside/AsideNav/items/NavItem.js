import Routes from '../../../../router/Routes.js'
import Auth from '../../../../router/Auth.js'

const NavItem = {
  render(item) {

    let itemClasses = 'group gradient-hover'

    if (!Auth.isAuthenticated()) {
      if (Object.keys(Routes).includes(item.href)) {
        if (Routes[item.href].requiresAuth === true) {
          itemClasses = 'opacity-45 select-none cursor-not-allowed'
        }
      }
    }

    return `
      <li>
        <a
          href="${item.href}"
          class="flex items-center gap-xs px-[12px] tablet:px-[16px] h-[40px] rounded-full whitespace-nowrap ${itemClasses}"
          data-link
          >
          <img
            class="group-hover:brightness-0 w-[24px] h-[24px] tablet:w-[22px] tablet:h-[22px]"
            data-icon-link
            src="${item.icon}"
            alt="${item.alt}"
            width="20"
            height="20"
            loading="lazy"
            aria-hidden="true"
          />
          <span
            class="group-hover:text-black transition-colors duration-200
                    hidden laptop:block text-sm tablet:text-base"
          >
            ${item.text}
          </span>
        </a>
      </li>
    `;
  }
};

export default NavItem;

import  { AsideLogo, AsideNav } from './index.js';


const Aside = {
  render() {
    return `
      <nav
        class="w-full sticky top-0 z-30 min-h-[64px] px-[16px] tablet:px-[24px]
              bg-sidebar-bg text-sidebar-text border-b-2 border-sidebar-text-muted
              flex items-center gap-base"
        >
        ${AsideLogo.render()}
        ${AsideNav.render()}
      </nav>
    `;
  },
};

export default Aside;

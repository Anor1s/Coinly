import { AsideMenuNav, AsideOtherNav } from "./index.js";

const Nav = {
  render() {
    return `
      <div class="flex items-center justify-between w-full gap-base overflow-x-auto">
        ${AsideMenuNav.render()}
        ${AsideOtherNav.render()}
      </div>
    `;
  }
};

export default Nav;

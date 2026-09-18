import { ThemeButtons } from "../../index.js";

const ThemeAndColorsList = {
  render() {
    return `
     <div class="flex flex-col mobile:flex-row gap-base">
      ${ThemeButtons.render()}
     </div>
    `
  },

  init() {
    ThemeButtons.init();
  }
};

export default ThemeAndColorsList;

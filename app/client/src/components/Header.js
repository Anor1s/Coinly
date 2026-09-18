const Header = {
  render(title) {
    return `
      <header class="min-h-[64px] bg-background">
          <div class="flex items-center h-full px-[16px] tablet:px-[24px]">
              <h2 class="text-3xl font-bold text-text-primary tracking-tight">
                ${title}
              </h2>
          </div>
      </header>
    `;
  },
};

export default Header;

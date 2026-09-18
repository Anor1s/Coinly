const Header = {
  render(title) {
    return `
      <header
        class="min-h-[80px] z-20 ml-[75px] tablet:ml-[150px] laptop:ml-[240px]
               desktop:ml-[325px] bg-surface border-b border-surface-secondary"
        >
          <div class="flex items-center h-full px-[16px] tablet:px-[24px]">
              <h2 class="text-2xl font-bold text-text-primary tracking-tight">
                ${title}
              </h2>
          </div>
      </header>
    `;
  },
};

export default Header;

const Logo = {
  render() {
    return `
      <div class="flex items-center gap-sm shrink-0">
        <div class="w-[36px] h-[36px] rounded-lg gradient-primary flex items-center justify-center shrink-0">
          <span class="text-text-secondary font-bold text-lg">C</span>
        </div>
        <span class="hidden tablet:block font-bold text-lg text-sidebar-text">Coinly</span>
      </div>
    `
  }
};

export default Logo;

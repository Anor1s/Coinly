const SectionBody = {
  render(sectionParts) {
    return `
      <div class="fixed inset-0 z-40 bg-background flex flex-col laptop:flex-row">
        <div class="hidden laptop:flex laptop:w-2/5 gradient-primary flex-col justify-between p-[48px]">
          <div class="flex items-center gap-sm">
            <div class="w-10 h-10 rounded-lg bg-text-secondary flex items-center justify-center shrink-0">
              <span class="text-xl font-bold text-surface">C</span>
            </div>
            <span class="text-xl font-bold text-text-secondary">Coinly</span>
          </div>

          <div class="flex flex-col gap-base">
            <h1 class="text-4xl font-bold text-text-secondary leading-tight">
              Know exactly where<br/>your money goes.
            </h1>
            <p class="text-text-secondary/80 text-lg max-w-[380px]">
              Track income and expenses, manage multiple currencies and see your spending broken down by category — all in one place.
            </p>
          </div>

          <p class="text-text-secondary/60 text-sm">© 2026 Coinly</p>
        </div>
        <div class="flex-1 flex items-center justify-center p-[16px] tablet:p-[32px] overflow-y-auto">
          <div class="flex flex-col gap-base w-full mobile:w-[70dvw] laptop:w-full laptop:max-w-[380px]">
            ${sectionParts.join('\n')}
          </div>
        </div>
      </div>
    `
  }
};

export default SectionBody;

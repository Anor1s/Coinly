const SectionBody = {
  render(sectionParts) {
    return `
      <div class="w-full h-full flex flex-col laptop:flex-row">
        <div class="hidden laptop:flex laptop:w-2/5 gradient-primary flex-col items-center justify-center gap-base p-[32px]">
          <div class="w-16 h-16 rounded-2xl bg-text-secondary/20 flex items-center justify-center">
            <span class="text-3xl font-bold text-text-secondary">C</span>
          </div>
          <h1 class="text-3xl font-bold text-text-secondary text-center">Coinly</h1>
          <p class="text-text-secondary/80 text-center max-w-[320px]">
            Track spending, manage multiple currencies and see where your money goes.
          </p>
        </div>
        <div class="flex-1 flex items-center justify-center p-[16px] tablet:p-[32px]">
          <div class="flex flex-col gap-base w-full mobile:w-[70dvw] laptop:w-full laptop:max-w-[380px]">
            ${sectionParts.join('\n')}
          </div>
        </div>
      </div>
    `
  }
};

export default SectionBody;

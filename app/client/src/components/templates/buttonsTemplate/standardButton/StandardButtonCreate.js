const AddTransactionButton = {
  render(ButtonConfig) {
    const icon = ButtonConfig.icon
      ? `<img
          class="brightness-0 transition-all duration-200"
          src="${ButtonConfig.icon}"
          alt="icon"
          height="28px"
          width="28px"
          loading="lazy"
        />`
      : ''

    const buttonType = ButtonConfig.buttonType
      ? ButtonConfig.buttonType
      : 'button'

    return`
      <button
        class="h-full w-full relative text-text-secondary text-2xl z-30 min-h-[50px] max-h-[60px]
             gradient-primary transition-opacity duration-200 ease-in-out
             rounded hover:opacity-90 font-bold group"
        type="${buttonType}"
        aria-label="${ButtonConfig.ariaLabel}"
        title="${ButtonConfig.title}"
        data-action="${ButtonConfig.action}"
        role="${buttonType}"
        id="${ButtonConfig.id}"
      >
        <div class="flex flex-row items-center justify-center gap-base">
          ${ButtonConfig.text}
          ${icon}
        </div>

      </button>
    `
  }
};

export default AddTransactionButton;

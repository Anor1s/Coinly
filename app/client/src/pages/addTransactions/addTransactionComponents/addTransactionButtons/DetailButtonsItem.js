const DetailButtonsItem = {
  render(buttonComponent) {
    return `
      <li>
        ${buttonComponent.render()}
      </li>
    `;
  }
};

export default DetailButtonsItem;

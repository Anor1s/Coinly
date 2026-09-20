const SortButtonItem = {
  render(button) {
    return `
      <li>
        ${button.render()}
      </li>
    `;
  }
};

export default SortButtonItem;

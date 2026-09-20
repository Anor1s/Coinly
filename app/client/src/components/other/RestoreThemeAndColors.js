const restoreTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  document.documentElement.classList.toggle('dark-theme', savedTheme !== 'light');
};

export { restoreTheme };

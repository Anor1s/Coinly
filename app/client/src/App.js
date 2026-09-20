import Router from './router/Router.js';
import { restoreTheme } from './components/other/RestoreThemeAndColors.js'
import Header from './components/Header.js';
import Aside from './components/aside/Aside.js';
import AuthService from './services/AuthService.js';

export async function initApp() {
  restoreTheme();

  await AuthService.checkAuth();

  renderAppLayout();
  Router.init();

  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      Router.navigateTo(href);
    }
  });
}

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.classList.add('loader-hidden');

    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 300);
});

function renderAppLayout(title = 'Coinly') {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="flex flex-col h-screen overflow-hidden">
        ${Aside.render()}
        ${Header.render(title)}
        <main
          id="main-content"
          class="flex-1 min-h-0 overflow-y-auto">
        </main>
      </div>
  `;
}
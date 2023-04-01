const menuButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const menuContainer = document.querySelector('#navbar-default');

menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');
});

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 950px)');

if (typeof navigation.showPopover === 'function') {
  const header = navigation.closest('header');

  function syncNavigation() {
    if (mobile.matches) {
      navigation.setAttribute('popover', 'auto');
      menu.hidden = false;
      return;
    }

    navigation.removeAttribute('popover');
    menu.hidden = true;
  }

  navigation.addEventListener('beforetoggle', event => {
    if (event.newState === 'open') {
      const bottom = header.getBoundingClientRect().bottom;
      navigation.style.setProperty('--menu-top', `${bottom}px`);
    }
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a') && navigation.matches(':popover-open')) {
      navigation.hidePopover();
    }
  });

  mobile.addEventListener('change', syncNavigation);
  syncNavigation();
}

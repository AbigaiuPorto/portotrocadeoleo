const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

function closeMenu() {
  if (!header || !menuToggle) return;
  header.classList.remove('is-menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
}

if (header && menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    header.classList.toggle('is-menu-open', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Abrir menu de navegação' : 'Fechar menu de navegação',
    );
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!header.contains(target)) closeMenu();
  });
}

const yearElement = document.querySelector('#current-year');
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

const floatingWhatsapp = document.querySelector('.floating-whatsapp');
if (floatingWhatsapp) {
  const protectedRegions = document.querySelectorAll(
    '.hero__visual, .service-item, .care__visual, .review-placeholder, .map-frame, .contact-card, .section-action, .site-footer',
  );
  let updatePending = false;

  const syncFloatingWhatsapp = () => {
    updatePending = false;
    const buttonRect = floatingWhatsapp.getBoundingClientRect();
    const overlapsContent = [...protectedRegions].some((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return false;
      return (
        buttonRect.left < rect.right &&
        buttonRect.right > rect.left &&
        buttonRect.top < rect.bottom &&
        buttonRect.bottom > rect.top
      );
    });
    floatingWhatsapp.classList.toggle('is-occluded', overlapsContent);
  };

  const scheduleFloatCheck = () => {
    if (updatePending) return;
    updatePending = true;
    window.requestAnimationFrame(syncFloatingWhatsapp);
  };

  window.addEventListener('scroll', scheduleFloatCheck, { passive: true });
  window.addEventListener('resize', scheduleFloatCheck);
  window.addEventListener('load', scheduleFloatCheck);
  scheduleFloatCheck();
}

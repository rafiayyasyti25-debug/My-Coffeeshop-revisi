/* ═══════════════════════════════════
   app.js — App Init, Navbar, Loader, Toast, Scroll Reveal
   Depends on: menu.js, cart.js, chat.js
═══════════════════════════════════ */

/* ── Toast Notification ── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ── Scroll Reveal (IntersectionObserver) ── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

/* ── Navbar scroll shadow ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── Mobile hamburger menu ── */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');
  if (!menu) return;
  menu.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');
  if (menu) menu.classList.remove('open');
  if (hamburger) hamburger.classList.remove('active');
}

/* Close mobile menu on nav link click */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
});

/* ── Loading Screen ── */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  /* Minimum display time so animations play fully */
  const MIN_DISPLAY = 2600;
  const startTime = Date.now();

  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MIN_DISPLAY - elapsed);

    setTimeout(() => {
      loader.classList.add('hide');

      /* Boot the rest of the app after loader fades */
      setTimeout(bootApp, 300);
    }, remaining);
  });
}

/* ── Boot: initialise all modules ── */
function bootApp() {
  renderMenu('all');
  initScrollReveal();
  initNavbar();
  initChat();
}

/* ── Close overlay by clicking backdrop ── */
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.addEventListener('click', closeCartSidebar);
});

/* Start loader immediately */
initLoader();

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Dark mode toggle, remembered in localStorage
const themeToggle = document.getElementById('theme-toggle');
function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.textContent = dark ? 'Light mode' : 'Dark mode';
}
applyTheme(localStorage.getItem('theme') === 'dark');
themeToggle.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  applyTheme(dark);
});

// Project filter
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    filters.forEach((b) => {
      const active = b === btn;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    const f = btn.dataset.filter;
    cards.forEach((c) => {
      c.hidden = !(f === 'all' || c.dataset.category === f);
    });
  });
});

// Contact form validation
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
function validateField(input) {
  const err = document.getElementById(input.id + '-error');
  let msg = '';
  const v = input.value.trim();
  if (!v) msg = 'This field is required.';
  else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = 'Enter a valid email address.';
  else if (input.id === 'message' && v.length < 10) msg = 'Message must be at least 10 characters.';
  err.textContent = msg;
  input.classList.toggle('invalid', Boolean(msg));
  input.setAttribute('aria-invalid', String(Boolean(msg)));
  return !msg;
}
form.querySelectorAll('input, textarea').forEach((el) => el.addEventListener('blur', () => validateField(el)));
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ok = [...form.querySelectorAll('input, textarea')].map(validateField).every(Boolean);
  statusEl.textContent = ok ? 'Thanks! Your message was validated (demo form, nothing is sent).' : 'Please fix the errors above.';
  if (ok) form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();

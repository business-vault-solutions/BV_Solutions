// ── Mobile menu toggle ──────────────────────────────────────────────────────
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });
}

// ── Contact form demo handler ───────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const successMsg  = document.getElementById('successMsg');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In production, replace this with a real form submission (Formspree, EmailJS, backend API, etc.)
    contactForm.querySelectorAll('input, textarea, select, button[type="submit"]')
      .forEach(el => el.setAttribute('disabled', true));
    if (successMsg) successMsg.classList.remove('hidden');
    contactForm.querySelector('button[type="submit"]').classList.add('hidden');
  });
}

// ── FAQ accordion ───────────────────────────────────────────────────────────
document.querySelectorAll('.faq-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const icon = btn.querySelector('i');
    const isOpen = !body.classList.contains('hidden');

    // Close all
    document.querySelectorAll('.faq-body').forEach(b => b.classList.add('hidden'));
    document.querySelectorAll('.faq-toggle i').forEach(i => i.style.transform = '');

    // Open clicked (unless it was already open)
    if (!isOpen) {
      body.classList.remove('hidden');
      icon.style.transform = 'rotate(180deg)';
    }
  });
});

// ── Smooth scroll for anchor links ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

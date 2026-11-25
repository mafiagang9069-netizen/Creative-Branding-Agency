/* ==========================================================================
   FORMA STUDIO — Vanilla JS Interactions
   Template by PixelNestByNS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const menuBtn = document.getElementById('studioMenuBtn');
  const mobileNav = document.getElementById('studioMobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      menuBtn.textContent = expanded ? 'Menu +' : 'Close ×';
      mobileNav.hidden = expanded;
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = 'Menu +';
        mobileNav.hidden = true;
      });
    });
  }

  // 2. Portfolio Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      workCards.forEach((card) => {
        const matches = category === 'all' || card.dataset.category === category;
        card.hidden = !matches;
      });
    });
  });

  // 3. Capabilities Accordion
  const capTriggers = document.querySelectorAll('.cap-trigger');
  capTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const body = trigger.nextElementSibling;
      trigger.setAttribute('aria-expanded', String(!expanded));
      if (body) {
        body.hidden = expanded;
      }
    });
  });

  // 4. Studio Brief Form Validation
  /*
   * FORM INTEGRATION NOTE:
   * Demo-mode client-side validation. Replace action="#" on #studioForm with Formspree,
   * Web3Forms, or Netlify Forms for live submission handling.
   */
  const studioForm = document.getElementById('studioForm');
  const studioFeedback = document.getElementById('studioFeedback');

  if (studioForm && studioFeedback) {
    studioForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = studioForm.name.value.trim();
      const email = studioForm.email.value.trim();
      const message = studioForm.message.value.trim();
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailValid || !message) {
        studioFeedback.textContent = 'Please enter your name, a valid email, and a quick project note.';
        studioFeedback.className = 'brutal-feedback is-error';
        return;
      }

      studioFeedback.textContent =
        'Brief validated (Demo Mode): Connect Formspree or Netlify Forms in index.html to receive live inquiries.';
      studioFeedback.className = 'brutal-feedback is-success';
      studioForm.reset();
    });
  }
});

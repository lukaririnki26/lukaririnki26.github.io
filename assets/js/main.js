(function () {
  var root = document.documentElement;
  // Teks dinamis ikut bahasa aktif (lihat i18n.js); tanpa i18n.js jatuh ke teks Indonesia.
  var FALLBACK = { 'js.menu.open': 'Buka menu', 'js.menu.close': 'Tutup menu', 'js.copy.ok': 'Email disalin ke clipboard.',
    'js.copy.manual': 'Salin manual: ' };
  function t(key) { return (window.i18n && window.i18n.t(key)) || FALLBACK[key]; }

  // Tema: ikuti sistem sampai pengunjung memilih sendiri.
  var themeBtn = document.querySelector('.theme-toggle');
  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Menu ponsel.
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', t('js.menu.open'));
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', t(open ? 'js.menu.close' : 'js.menu.open'));
    });
    if (window.i18n) window.i18n.onChange(function () {
      toggle.setAttribute('aria-label', t(menu.classList.contains('is-open') ? 'js.menu.close' : 'js.menu.open'));
    });
    toggle.setAttribute('aria-label', t('js.menu.open'));
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  // Garis bawah header setelah digulir.
  var header = document.querySelector('.site-header');
  function onScroll() { header && header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Animasi muncul + tautan menu aktif.
  var navLinks = {};
  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(function (a) {
    navLinks[a.getAttribute('href').slice(1)] = a;
  });

  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); revealObs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

    var sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var link = navLinks[en.target.id];
        if (!link || !en.isIntersecting) return;
        Object.keys(navLinks).forEach(function (k) { navLinks[k].classList.remove('is-active'); });
        link.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { sectionObs.observe(s); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Saring proyek per kategori.
  var chips = document.querySelectorAll('.chip[data-filter]');
  var projects = document.querySelectorAll('.project[data-category]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      projects.forEach(function (p) {
        var cats = p.getAttribute('data-category').split(' ');
        p.hidden = !(f === 'semua' || cats.indexOf(f) !== -1);
        if (!p.hidden) p.classList.add('is-visible');
      });
    });
  });

  // Salin email.
  var copyBtn = document.querySelector('.copy-email');
  var status = document.querySelector('.copy-status');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      function done(msg) { if (status) { status.textContent = msg; setTimeout(function () { status.textContent = ''; }, 2500); } }
      // Cadangan bila Clipboard API tidak tersedia atau ditolak.
      function legacyCopy() {
        var ta = document.createElement('textarea');
        ta.value = email;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        done(ok ? t('js.copy.ok') : t('js.copy.manual') + email);
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(function () { done(t('js.copy.ok')); }, legacyCopy);
      } else {
        legacyCopy();
      }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

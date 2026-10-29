(function () {
  var root = document.documentElement;
  // Dynamic strings follow the active language (see i18n.js); without i18n.js they fall back to Indonesian.
  var FALLBACK = { 'js.menu.open': 'Buka menu', 'js.menu.close': 'Tutup menu', 'js.copy.ok': 'Tersalin',
    'js.copy.manual': 'Salin manual: ' };
  function t(key) { return (window.i18n && window.i18n.t(key)) || FALLBACK[key]; }

  // Theme: follow the system setting until the visitor picks one.
  var themeBtn = document.querySelector('.theme-toggle');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      // Smooth color transition only while switching themes, so regular hovers stay snappy.
      root.classList.add('theme-anim');
      root.setAttribute('data-theme', next);
      setTimeout(function () { root.classList.remove('theme-anim'); }, 400);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile menu.
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

  // Header border after scrolling.
  var header = document.querySelector('.site-header');
  function onScroll() { header && header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal-on-scroll and active nav link.
  var navLinks = {};
  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(function (a) {
    navLinks[a.getAttribute('href').slice(1)] = a;
  });

  // Stagger cards within a group instead of revealing them all at once.
  document.querySelectorAll('.skills, .projects, .timeline').forEach(function (group) {
    var i = 0;
    Array.prototype.forEach.call(group.children, function (el) {
      if (el.classList.contains('reveal')) el.dataset.delay = Math.min(i++, 5) * 80;
    });
  });
  function show(el) {
    var delay = +el.dataset.delay || 0;
    el.style.transitionDelay = delay + 'ms';
    el.classList.add('is-visible');
    setTimeout(function () { el.style.transitionDelay = ''; el.classList.add('reveal-done'); }, delay + 650);
  }

  // Summary numbers count up from 0, keeping the active language's number format.
  function countUp(el) {
    var target = el.textContent.trim();
    var m = target.match(/^([\d.,]+)(.*)$/);
    if (!m || reduceMotion) return;
    var sep = (m[1].match(/[.,]/) || [''])[0];
    var end = parseInt(m[1].replace(/[.,]/g, ''), 10);
    var start = performance.now(), dur = 1100;
    el.dataset.counting = '1';
    function frame(now) {
      if (el.dataset.counting !== '1') return; // stopped because the language changed
      var p = Math.min((now - start) / dur, 1);
      var v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = (sep ? String(v).replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(v)) + m[2];
      if (p < 1) requestAnimationFrame(frame);
      else { el.textContent = target; delete el.dataset.counting; }
    }
    requestAnimationFrame(frame);
  }
  // i18n.js has already set the translated text; just stop counting on that element.
  if (window.i18n) window.i18n.onChange(function () {
    document.querySelectorAll('[data-count][data-i18n][data-counting]').forEach(function (el) { delete el.dataset.counting; });
  });

  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { show(en.target); revealObs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

    var lineObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-drawn'); lineObs.unobserve(en.target); }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal-line').forEach(function (el) { lineObs.observe(el); });

    var countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { setTimeout(function () { countUp(en.target); }, 350); countObs.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-count]').forEach(function (el) { countObs.observe(el); });

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
    document.querySelectorAll('.reveal-line').forEach(function (el) { el.classList.add('is-drawn'); });
  }

  // Filter projects by category.
  var chips = document.querySelectorAll('.chip[data-filter]');
  var projects = document.querySelectorAll('.project[data-category]');
  var projectGrid = document.querySelector('.projects');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      projectGrid.classList.remove('is-filtering');
      void projectGrid.offsetWidth; // restart the animation when filters are clicked in quick succession
      projects.forEach(function (p) {
        var cats = p.getAttribute('data-category').split(' ');
        p.hidden = !(f === 'all' || cats.indexOf(f) !== -1);
        if (!p.hidden) p.classList.add('is-visible', 'reveal-done');
      });
      projectGrid.classList.add('is-filtering');
    });
  });

  // Copy email.
  var copyBtn = document.querySelector('.copy-email');
  var status = document.querySelector('.copy-status');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      function done(msg) { if (status) { status.textContent = msg; setTimeout(function () { status.textContent = ''; }, 2500); } }
      // Fallback when the Clipboard API is unavailable or denied.
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

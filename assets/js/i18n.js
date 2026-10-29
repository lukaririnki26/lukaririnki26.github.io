/*
 * Dua bahasa: Indonesia (isi asli HTML) dan Inggris (kamus di bawah).
 * Teks Indonesia dibaca dari halaman saat dimuat, jadi cukup ubah index.html untuk versi Indonesia
 * dan kamus EN di file ini untuk versi Inggris. Kunci yang tidak ada di kamus tetap berbahasa Indonesia.
 */
(function () {
  var EN = {
    'meta.title': 'Fahmi Ramadhani — Developer',
    'meta.description': 'Portfolio of Fahmi Ramadhani, Developer. ERP, financial platforms, and backends with Laravel, Go, PostgreSQL, and Nuxt.',
    'skip': 'Skip to content',
    'nav.aria': 'Main navigation',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'lang.aria': 'Choose language',
    'theme.aria': 'Toggle light/dark theme',

    'hero.badge': 'Open to projects &amp; collaboration',
    'hero.title': 'I build <span class="grad">ERP and financial systems</span>, from the database to the screen.',
    'hero.lead': 'Hi, I\'m <strong>Fahmi Ramadhani</strong>, a developer. Over the last five years I have worked on ERP systems, mobile apps, and financial platforms, from Laravel and MySQL to Go microservices, PostgreSQL, and Nuxt.',
    'hero.cta.projects': 'View projects',
    'hero.cta.cv': 'Download CV',
    'hero.social': 'Social links',
    'hero.summary': 'Summary',
    'hero.avatar': 'Profile picture of Fahmi Ramadhani',
    'code.file': 'profile.json',
    'code.body': '{\n  <span class="k">"role"</span>: <span class="s">"Developer"</span>,\n  <span class="k">"backend"</span>: [<span class="s">"Go"</span>, <span class="s">"Laravel"</span>, <span class="s">"Flask"</span>],\n  <span class="k">"frontend"</span>: [<span class="s">"Vue/Nuxt"</span>, <span class="s">"Flutter"</span>],\n  <span class="k">"sql"</span>: [<span class="s">"PostgreSQL"</span>, <span class="s">"MySQL"</span>],\n  <span class="k">"nosql"</span>: [<span class="s">"MongoDB"</span>, <span class="s">"Redis"</span>],\n  <span class="k">"location"</span>: <span class="s">"East Java, ID"</span>\n}',
    'stats.years': 'Years of experience',
    'stats.commits': 'Commits since 2025',
    'stats.services': 'Go services worked on',

    'about.kicker': '01 — About',
    'about.title': 'Full-stack, from the database to the screen.',
    'about.p1': 'I started as a Full-Stack Developer in 2021 with Laravel, Bootstrap, jQuery, and MySQL. Over time I kept getting the heavier parts: slow summary reports, large data imports and exports, and ERP modules that all depend on each other. I also built a mobile app with Flutter along the way.',
    'about.p2': 'Since 2025 most of my time has gone into a large financial platform: from its Laravel version to its new version built on Go microservices and Nuxt, including the import engine, workflows, reporting, and the AI assistant. In between came other projects: a backend API, an admin panel, a Go boilerplate, and a Kafka integration. Outside the code I draw flowcharts, lead modules, and talk to clients directly.',
    'about.v1': '<strong>Communication.</strong> Turning client needs into flowcharts, then into features.',
    'about.v2': '<strong>Leadership.</strong> Owning ERP modules and giving the team technical direction.',
    'about.v3': '<strong>Problem-solving.</strong> Digging into bugs and slow queries until the cause turns up.',

    'skills.kicker': '02 — Skills',
    'skills.title': 'The tools I use every day.',
    'skills.backend.t': 'Backend',
    'skills.backend.d': 'REST and gRPC, microservices with a message queue, and Laravel monoliths that have been running for years.',
    'skills.data.t': 'Databases',
    'skills.data.d': 'Partitioning, indexing, stored procedures, and importing millions of rows without disturbing other users.',
    'skills.fe.t': 'Frontend &amp; Mobile',
    'skills.fe.d': 'Form builders, dashboards, and registration wizards on the web, plus mobile apps with Flutter.',
    'skills.ai.t': 'AI &amp; Tooling',
    'skills.ai.d': 'An in-app chat assistant with RAG, MCP tools for the team, and a Chrome extension.',
    'skills.ops.t': 'DevOps',
    'skills.ops.d': 'Docker Compose, CI that builds images, server deployment, and monitoring for metrics and logs.',
    'skills.qa.t': 'Analysis &amp; Teamwork',
    'skills.qa.d': 'Process flowcharts, requirement discussions with clients, reviews, and a pull-request based Git flow.',

    'projects.kicker': '03 — Selected Projects',
    'projects.title': 'A few things I have built.',
    'projects.filter': 'Filter projects',
    'projects.all': 'All',
    'p1.badge': 'Featured',
    'p1.t': 'Microservice-Based Financial Platform',
    'p1.d': 'Helping rebuild a running financial platform as a set of Go services with a Nuxt frontend. Most features, such as pages, forms, workflows, and reports, can be configured without writing new code.',
    'p1.m1': '<strong>1,000+</strong> commits',
    'p1.m2': '<strong>Go</strong> microservices',
    'p1.m3': '<strong>Nuxt</strong> + PrimeVue',
    'p1.link': 'Request a case study →',
    'p2.t': 'Financial Platform (Laravel)',
    'p2.d': 'The version users rely on every day: bulk transactions from Excel, claims and payments, tax calculation, reports, and invoicing. Many changes came straight from user feedback.',
    'p2.m1': '<strong>430+</strong> commits',
    'p2.m2': '<strong>Bulk transactions</strong> via Excel',
    'p2.m3': '<strong>Reports</strong> &amp; invoices',
    'p2.link': 'Request a demo →',
    'p3.t': 'Large-Scale Excel/CSV Import Engine',
    'p3.d': 'Files of around 1 GB are loaded with COPY into a separate table, indexed, and then attached as a partition of the main table, so tables in use are never locked.',
    'p3.m1': '<strong>1 million</strong> rows in &lt; 5 min',
    'p3.m2': '<strong>≈1 GB</strong> per file',
    'p3.m3': '<strong>No</strong> table locks',
    'p4.t': 'In-App AI Assistant',
    'p4.d': 'A chat assistant that answers from user guides (RAG) and application data, with per-role access and personal data that is never sent to the model.',
    'p4.m1': '<strong>RAG</strong> with pgvector',
    'p4.m2': '<strong>Per-role</strong> access',
    'p4.m3': '<strong>Personal data</strong> filtered out',
    'p5.t': 'ERP Modules, Reports, and a Mobile App',
    'p5.d': 'ERP module development for clients, including as project leader. Summary reports were sped up with MongoDB, large exports and imports moved to Python Flask with a queue, and a mobile app was built with Flutter on top of a Laravel API.',
    'p6.d': 'A Chrome extension that fills forms with realistic test data. Fields are recognised from autocomplete hints, ARIA labels, and nearby text; it works with React, Vue, Angular, PrimeVue, and MUI, with Indonesian (NIK, NPWP, phone numbers) and English data.',
    'p9.t': 'Go Boilerplates &amp; Architecture Research',
    'p9.d': 'A starting point for the team\'s backend projects: a Go modular monolith with JWT, token blacklisting, and security middleware, plus a Rust (Axum) version. Before the financial platform was rebuilt, I also prototyped Go microservices with gRPC, an API gateway, and an RPS load-test script.',
    'link.discuss': 'Let\'s talk →',
    'link.github': 'View on GitHub →',

    'exp.kicker': '04 — Experience',
    'exp.title': 'Career journey.',
    'exp.0.when': 'Jul 2025 — Present',
    'exp.0.d': 'Several client and internal projects, with a financial platform as the main one.',
    'exp.0.a': 'A financial platform from its Laravel version to a Go and Nuxt microservice version (~1,400 commits), including an import engine that loads 1 million rows in under 5 minutes and an AI assistant.',
    'exp.0.b': 'A backend API with Hono on Deno + Supabase (email/OAuth login, OTP) and CI/CD to Supabase.',
    'exp.0.c': 'A Nuxt + Firebase admin panel for a client app.',
    'exp.0.f': 'A Go modular-monolith boilerplate for the team, a gRPC microservice prototype, and load testing.',
    'exp.0.g': 'Kafka integration (producer and consumer) in a Laravel backend.',
    'exp.0.e': 'Set up deployment, monitoring, and observability across several servers.',
    'exp.1.when': 'Sep 2023 — Jul 2025',
    'exp.1.d': 'Jakarta. ERP development, while leading several modules.',
    'exp.1.a': 'Developed and optimized ERP modules and integrated new features into the running system.',
    'exp.1.b': 'Sped up summary reports with MongoDB and large imports/exports with Python Flask and a queue.',
    'exp.1.c': 'Drew process flowcharts and gave the team direction as project leader.',
    'exp.1.e': 'Built a mobile app with Flutter and Laravel.',
    'exp.2.when': 'Jun 2021 — Sep 2023',
    'exp.2.d': 'Jakarta. Web applications for clients with Laravel, Bootstrap, jQuery, and MySQL.',
    'exp.2.a': 'Added and updated features in live web systems, keeping them responsive and tidy.',
    'exp.2.b': 'Worked with clients directly to build and adjust applications to their needs.',
    'exp.2.c': 'Collaborated through Git to keep the codebase well structured.',
    'exp.3.when': 'Oct 2019 — Mar 2020',
    'exp.3.t': 'Internship · <span>VEDC Malang</span>',
    'exp.3.d': 'Built a Delphi desktop app to support civil servants\' work, and helped run training sessions.',
    'exp.4.when': 'Education',
    'exp.4.d': 'Pasuruan, East Java.',

    'contact.kicker': '05 — Contact',
    'contact.title': 'Have a project or a role in mind? Let\'s talk.',
    'contact.lead': 'Email or LinkedIn is the fastest way to reach me.',
    'contact.copy': 'Copy email',

    'footer.top': 'Back to top ↑',

    // Teks dinamis dari main.js
    'js.menu.open': 'Open menu',
    'js.menu.close': 'Close menu',
    'js.copy.ok': 'Email copied to clipboard.',
    'js.copy.manual': 'Copy manually: '
  };

  var ID_DYNAMIC = {
    'js.menu.open': 'Buka menu',
    'js.menu.close': 'Tutup menu',
    'js.copy.ok': 'Email disalin ke clipboard.',
    'js.copy.manual': 'Salin manual: '
  };

  var root = document.documentElement;
  var ID = {};
  var listeners = [];

  // Ambil teks Indonesia dari halaman sekali, sebelum diganti.
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    ID[el.getAttribute('data-i18n')] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
      var p = pair.split(':');
      if (p.length === 2) ID[p[1].trim()] = el.getAttribute(p[0].trim());
    });
  });
  Object.keys(ID_DYNAMIC).forEach(function (k) { ID[k] = ID_DYNAMIC[k]; });

  var lang = root.getAttribute('data-lang') === 'en' ? 'en' : 'id';

  function t(key) {
    var dict = lang === 'en' ? EN : ID;
    return dict[key] != null ? dict[key] : ID[key];
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        if (p.length !== 2) return;
        var v = t(p[1].trim());
        if (v != null) el.setAttribute(p[0].trim(), v);
      });
    });
    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      var on = b.getAttribute('data-lang-btn') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    root.classList.remove('i18n-pending');
    listeners.forEach(function (fn) { fn(lang); });
  }

  function setLang(next) {
    if (next !== 'id' && next !== 'en') return;
    lang = next;
    try { localStorage.setItem('lang', next); } catch (e) {}
    apply();
  }

  document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang-btn')); });
  });

  window.i18n = {
    t: t,
    lang: function () { return lang; },
    set: setLang,
    onChange: function (fn) { listeners.push(fn); }
  };

  apply();
})();

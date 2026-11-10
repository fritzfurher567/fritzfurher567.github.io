(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var GH_USER = 'fritzfurher567';

  /* =========================================================
     CONTENT — edit these two lists to update the site
     ========================================================= */

  var EXPERIENCE = [
    {
      company: 'Freelance Developer', role: 'Roblox scripter and full-stack developer',
      from: '2026', to: 'Present', tag: 'Remote', current: true,
      points: [
        'Custom Luau systems, UI and game mechanics for Roblox creators.',
        'Commissions from quick fixes up to multiplayer systems.'
      ],
      chips: ['Luau', 'UI systems', 'Roblox Studio']
    },
    {
      company: 'Nexus', role: 'Founder and lead developer',
      from: '2026', tag: 'Discord bot',
      points: [
        'All-in-one Discord bot with 300+ commands: moderation, tickets, leveling, economy and Roblox verification.',
        'Modular, cog-based Python codebase with a Next.js site alongside it.'
      ],
      chips: ['Python', 'discord.py', 'Next.js']
    },
    {
      company: 'Aberration', role: 'Side scripter',
      from: 'Jul 2026', tag: 'Roblox game',
      points: ['Side scripter on a Roblox game, as client work.'],
      chips: ['Luau']
    },
    {
      company: 'Independent Projects', role: 'Lua and Luau, web scripting and Discord bots',
      from: '2025', to: 'Present', tag: 'Remote',
      points: ['Self-directed Roblox, web and Discord bot projects.'],
      chips: []
    }
  ];

  /* image: a screenshot file in this folder. Leave it out and the card
     shows the project name in outline until you add one.
     pos: which part of the screenshot stays visible when it is cropped. */
  var PROJECTS = [
    {
      slug: 'nexus', title: 'Nexus', image: 'Nexus.png', cat: 'personal', category: 'Discord bot',
      blurb: 'An all-in-one Discord bot with 300+ commands and features.',
      timeline: '2026', status: 'Archived',
      overview: 'Nexus is an all-in-one Discord bot with over 300 commands, built so a community can run moderation, tickets, leveling, economy and Roblox verification from one place instead of juggling a pile of single-purpose bots.',
      features: [
        'Moderation suite and a full ticket system.',
        'Leveling and economy systems.',
        'Roblox verification with rank hierarchy and rank sync.',
        'Web dashboard and landing site built with Next.js.'
      ],
      journey: [
        'Started life as "All In One Bot" (AIO) before being renamed Nexus.',
        'Grew into 60+ cogs in a modular discord.py codebase.',
        'Paired with a Next.js site using Clerk for login and Convex for the database.'
      ],
      final: 'One bot that replaces many, built to stay maintainable as the command count keeps growing.',
      tech: ['Python', 'discord.py', 'Next.js', 'Convex', 'Tailwind CSS'],
      live: null, source: 'https://github.com/fritzfurher567/Nexus-Bot'
    },
    {
      slug: 'apiary', title: 'Apiary', image: 'Apiary.png', cat: 'personal', category: 'Web app',
      blurb: 'An API key vault and API marketplace in one dashboard.',
      timeline: '2026', status: 'In development',
      overview: 'Apiary is an all-in-one API key vault and API marketplace: discover APIs, buy access, keep your keys in one place, organize them into projects and keep an eye on usage and billing.',
      features: [
        'Discover APIs and buy access from a marketplace.',
        'Store keys and organize them into projects.',
        'Usage and billing overview in a single dashboard.'
      ],
      journey: [], final: '', tech: [], live: null, source: null
    },
    {
      slug: 'targetly', title: 'Targetly', image: 'Targetly.png', pos: 'left top', cat: 'personal', category: 'Web app, job search',
      blurb: 'Search jobs from Indeed and LinkedIn, and find people through GitHub and their portfolios.',
      timeline: '2026', status: 'In development',
      overview: 'Targetly is a web app that lets you search for jobs on Indeed and LinkedIn, and find people through GitHub and their portfolios. It gives job seekers and recruiters one streamlined place to look.',
      features: [
        'Search job listings from Indeed and LinkedIn in one place.',
        'Find people through their GitHub profiles and portfolios.',
        'Built for job seekers and recruiters alike.'
      ],
      journey: [], final: '', tech: [], live: null, source: null
    },
    {
      slug: 'kuro-browser', title: 'Kuro Browser', image: 'Kuro.png', pos: '78% top', cat: 'personal', category: 'Browser',
      blurb: 'A web browser with a focus on privacy and performance.',
      timeline: '2026', status: 'In development',
      overview: 'Kuro Browser is a web browser with a focus on privacy and performance, for people who put their online safety and browsing speed first.',
      features: [
        'Privacy-focused browsing with built-in ad blocking and tracking protection.',
        'Optional local AI side-assistant powered by Ollama, so nothing leaves your machine.',
        'Built on Zen Browser and Firefox, with a focus on performance and speed.'
      ],
      journey: [], final: '',
      tech: ['C++', 'JavaScript', 'HTML', 'CSS', 'Python', 'Fluent', 'Ollama', 'Zen Browser', 'Firefox'],
      live: null, source: null
    },
    {
      slug: 'quill', title: 'Quill', image: 'Quill.png', pos: '41% top', cat: 'personal', category: 'Desktop writing app',
      blurb: 'A feature-packed writing tool for novelists.',
      timeline: '2026', status: 'In development',
      overview: 'Quill is a feature-packed writing tool for novelists. Use a local AI model, bring your own API key, or skip AI entirely during onboarding. Customization runs throughout, and cloud storage is planned.',
      features: [
        'Optional local AI side-assistant powered by Ollama, so your writing stays private.',
        'Bring your own API key, or skip AI entirely.',
        'Customization throughout, with cloud storage planned.'
      ],
      journey: [], final: '',
      tech: ['Electron', 'JavaScript', 'HTML', 'CSS', 'Node.js'],
      live: null, source: null
    },
    {
      /* client work: `role` is shown in place of a status. Add `image`, `features`
         and `live` (the game's Roblox link) when you have them. */
      slug: 'aberration', title: 'Aberration', cat: 'client', category: 'Roblox game',
      blurb: 'A Roblox game I worked on as a side scripter.',
      timeline: '2026', role: 'Side scripter',
      overview: 'Aberration is a Roblox game. I worked on it as a side scripter, writing Luau for the game as client work.',
      features: [], journey: [], final: '',
      tech: ['Luau', 'Roblox Studio'],
      live: null, source: null
    }
  ];

  var ICONS = {
    back: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.94c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.03.36.32.68.95.68 1.92v2.85c0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>'
  };

  /* =========================================================
     Theme toggle (unchanged)
     ========================================================= */
  var toggle = $('#themeToggle');

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
    toggle.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    if (!document.startViewTransition || reduceMotion) { applyTheme(next); return; }
    var r = toggle.getBoundingClientRect();
    var x = r.left + r.width / 2, y = r.top + r.height / 2;
    var radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    var t = document.startViewTransition(function () { applyTheme(next); });
    t.ready.then(function () {
      root.animate(
        { clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + radius + 'px at ' + x + 'px ' + y + 'px)'] },
        { duration: 650, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(function () {});   /* transition skipped (e.g. tab in background): theme still switched */
  });

  /* =========================================================
     Project cards and detail view
     ========================================================= */
  function shotHTML(p, lazy) {
    if (!p.image) return '<div class="shot shot-blank" aria-hidden="true"><span>' + p.title + '</span></div>';
    return '<div class="shot"><img src="' + p.image + '" alt="Screenshot of ' + p.title + '"' +
      (p.pos ? ' style="object-position:' + p.pos + '"' : '') + (lazy ? ' loading="lazy"' : '') + '></div>';
  }

  function cardHTML(p, wide) {
    return '<a class="work' + (wide ? ' wide' : '') + '" href="#projects/' + p.slug + '">' + shotHTML(p, true) +
      '<div class="work-info"><h3>' + p.title + '</h3><span class="work-kind">' + p.category + '</span>' +
      '<p>' + p.blurb + '</p><span class="work-status">' + (p.status || p.role || '') + '</span></div></a>';
  }

  function list(items, cls) {
    return '<ul class="' + cls + '">' + items.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  }

  function detailHTML(p) {
    var actions = '';
    if (p.live) actions += '<a class="btn btn-solid" href="' + p.live + '" target="_blank" rel="noopener">Open live site</a>';
    if (p.source) actions += '<a class="btn btn-line" href="' + p.source + '" target="_blank" rel="noopener">' + ICONS.github + 'Source code</a>';

    var main = '<section><h2>Overview</h2><p>' + p.overview + '</p></section>';
    if (p.features && p.features.length) main += '<section><h2>Key features</h2>' + list(p.features, 'ticks') + '</section>';
    if (p.journey && p.journey.length) main += '<section><h2>How it came together</h2>' + list(p.journey, 'steps').replace('<ul', '<ol').replace('</ul>', '</ol>') + '</section>';
    if (p.final) main += '<blockquote class="final">' + p.final + '</blockquote>';

    var side = '<dl><div><dt>Type</dt><dd>' + p.category + '</dd></div>' +
      (p.role ? '<div><dt>My role</dt><dd>' + p.role + '</dd></div>' : '') +
      '<div><dt>Year</dt><dd>' + p.timeline + '</dd></div>' +
      (p.status ? '<div><dt>Status</dt><dd>' + p.status + '</dd></div>' : '') + '</dl>';
    if (p.tech && p.tech.length) side += '<h2>Built with</h2>' + list(p.tech, 'chips');

    return '<article class="detail">' +
      '<a class="back" href="#projects">' + ICONS.back + 'All projects</a>' +
      '<header class="detail-head"><div><h1>' + p.title + '</h1><p>' + p.blurb + '</p></div>' +
      (actions ? '<div class="detail-actions">' + actions + '</div>' : '') + '</header>' +
      shotHTML(p, false) +
      '<div class="detail-body"><div class="detail-main">' + main + '</div><aside class="detail-side">' + side + '</aside></div>' +
      '</article>';
  }

  var filter = 'all';
  var rowsEl = $('#projectRows'), emptyEl = $('#projEmpty');
  var listEl = $('#projectsList'), detailEl = $('#projectsDetail');

  function renderProjects() {
    var shown = PROJECTS.filter(function (p) { return filter === 'all' || p.cat === filter; });
    rowsEl.innerHTML = shown.map(function (p, i) { return cardHTML(p, i === 0 && shown.length % 2 === 1); }).join('');
    rowsEl.hidden = shown.length === 0;
    emptyEl.hidden = shown.length > 0;
  }

  $$('.filter-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      filter = b.getAttribute('data-filter');
      $$('.filter-btn').forEach(function (x) {
        var on = x === b;
        x.classList.toggle('active', on);
        x.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      renderProjects();
    });
  });
  renderProjects();

  /* home shows the first three projects that have a screenshot */
  $('#homeWork').innerHTML = PROJECTS
    .filter(function (p) { return p.image; }).slice(0, 3)
    .map(function (p, i) { return cardHTML(p, i === 0); }).join('');

  /* =========================================================
     Experience
     ========================================================= */
  $('#expList').innerHTML = EXPERIENCE.map(function (x) {
    var when = x.from + (x.to ? ' to ' + (x.to === 'Present' ? 'now' : x.to) : '');
    return '<article class="xp-row">' +
      '<div class="xp-when"><span class="xp-date">' + (x.current ? '<span class="now-dot"></span>' : '') + when + '</span><span>' + x.tag + '</span></div>' +
      '<div class="xp-what"><h3>' + x.company + '</h3><p class="xp-role">' + x.role + '</p>' +
      (x.points && x.points.length ? list(x.points, 'xp-points') : '') +
      (x.chips && x.chips.length ? list(x.chips, 'chips') : '') +
      '</div></article>';
  }).join('');

  /* =========================================================
     Pages: #about, #projects, #projects/nexus ...
     ========================================================= */
  var PAGES = ['home', 'about', 'projects', 'testimonials', 'contact'];
  var TITLES = { home: 'Fritz | Roblox, Discord bot and web developer', about: 'About | Fritz', projects: 'Projects | Fritz', testimonials: 'Testimonials | Fritz', contact: 'Contact | Fritz' };
  var currentRoute = null;

  function parseRoute() {
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    var page = PAGES.indexOf(parts[0]) >= 0 ? parts[0] : 'home';
    var project = page === 'projects' && parts[1]
      ? PROJECTS.filter(function (p) { return p.slug === parts[1]; })[0] : null;
    return { page: page, project: project || null };
  }

  function render() {
    var r = parseRoute();
    var key = r.page + '/' + (r.project ? r.project.slug : '');
    if (key === currentRoute) return;
    currentRoute = key;

    $$('.nav-item').forEach(function (n) {
      var on = n.getAttribute('data-page') === r.page;
      n.classList.toggle('active', on);
      if (on) n.setAttribute('aria-current', 'page'); else n.removeAttribute('aria-current');
    });
    $$('.page').forEach(function (p) { p.classList.toggle('active', p.id === 'page-' + r.page); });

    if (r.project) {
      detailEl.innerHTML = detailHTML(r.project);
      listEl.hidden = true; detailEl.hidden = false;
    } else {
      detailEl.hidden = true; detailEl.innerHTML = ''; listEl.hidden = false;
    }

    document.title = r.project ? r.project.title + ' | Fritz' : TITLES[r.page];
    window.scrollTo(0, 0);
  }

  function go(page) {
    var url = page === 'home' ? location.pathname + location.search : '#' + page;
    try { history.pushState(null, '', url); } catch (e) { location.hash = page === 'home' ? '' : page; }
    render();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-page]');
    if (b) go(b.getAttribute('data-page'));
  });
  window.addEventListener('hashchange', render);
  window.addEventListener('popstate', render);
  render();

  /* =========================================================
     Hero: the headline picks what the stage shows
     ========================================================= */
  var picks = $$('.pick'), panes = $$('.pane');
  var order = picks.map(function (b) { return b.getAttribute('data-stage'); });
  var stageAt = 0, autoPlay = !reduceMotion, heroHover = false;

  function showStage(name) {
    stageAt = order.indexOf(name);
    picks.forEach(function (b) {
      var on = b.getAttribute('data-stage') === name;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    panes.forEach(function (p) {
      var on = p.getAttribute('data-stage') === name;
      p.classList.toggle('is-on', on);
      if (on) p.removeAttribute('aria-hidden'); else p.setAttribute('aria-hidden', 'true');
    });
  }
  picks.forEach(function (b) {
    b.addEventListener('click', function () { autoPlay = false; showStage(b.getAttribute('data-stage')); });
  });

  /* cycles on its own until someone picks a line, so all three get seen */
  var hero = $('#hero');
  hero.addEventListener('pointerenter', function () { heroHover = true; });
  hero.addEventListener('pointerleave', function () { heroHover = false; });
  setInterval(function () {
    if (!autoPlay || heroHover || document.hidden) return;
    if (!$('#page-home').classList.contains('active') || window.scrollY > innerHeight * 0.6) return;
    showStage(order[(stageAt + 1) % order.length]);
  }, 4200);

  /* =========================================================
     Copy buttons (contact page)
     ========================================================= */
  $$('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy'), label = b.getAttribute('data-copy-label');
      var done = function (ok) {
        b.textContent = ok ? 'Copied' : 'Press Ctrl+C to copy';
        setTimeout(function () { b.textContent = label; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else { done(false); }
    });
  });

  /* =========================================================
     Footer: local time and weather
     ========================================================= */
  var clockEl = $('#liveClock');
  var fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Toronto', hour: 'numeric', minute: '2-digit', hour12: true });
  function tick() { clockEl.textContent = fmt.format(new Date()); }
  tick(); setInterval(tick, 15000);
  $('#year').textContent = new Date().getFullYear();
  $('#backTop').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); });

  function describeWeather(c) {
    if (c === 0) return 'clear';
    if (c <= 3) return 'cloudy';
    if (c === 45 || c === 48) return 'foggy';
    if (c >= 51 && c <= 57) return 'drizzling';
    if (c >= 61 && c <= 67) return 'raining';
    if (c >= 71 && c <= 77) return 'snowing';
    if (c >= 80 && c <= 82) return 'showery';
    if (c >= 95) return 'stormy';
    return 'cloudy';
  }
  fetch('https://api.open-meteo.com/v1/forecast?latitude=43.6532&longitude=-79.3832&current_weather=true')
    .then(function (r) { return r.json(); })
    .then(function (d) {
      var w = d.current_weather; if (!w) return;
      $('#weatherTemp').textContent = Math.round(w.temperature) + '°C';
      $('#weatherDescText').textContent = describeWeather(w.weathercode);
      $('#weatherWrap').hidden = false;
    })
    .catch(function () {});

  /* =========================================================
     GitHub contribution year
     ========================================================= */
  (function loadContrib() {
    var grid = $('#contribGrid'), months = $('#contribMonths'), summary = $('#contribSummary');

    function cell(cls) { var d = document.createElement('div'); d.className = cls; grid.appendChild(d); return d; }

    fetch('https://github-contributions-api.jogruber.de/v4/' + GH_USER + '?y=last')
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (data) {
        var days = (data.contributions || []).slice(-365);
        if (!days.length) throw new Error('no data');
        var pad = new Date(days[0].date + 'T00:00:00').getDay();
        var total = 0, lastMonth = -1, lastCol = -10, i;
        for (i = 0; i < pad; i++) cell('cbox pad');
        days.forEach(function (d, n) {
          var idx = pad + n, col = Math.floor(idx / 7);
          var dt = new Date(d.date + 'T00:00:00');
          cell('cbox' + (d.level ? ' l' + d.level : '')).title =
            d.count + ' contribution' + (d.count === 1 ? '' : 's') + ' on ' +
            dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
          total += d.count;
          if (idx % 7 === 0 && dt.getMonth() !== lastMonth && col - lastCol >= 3) {
            var s = document.createElement('span');
            s.textContent = dt.toLocaleDateString('en-US', { month: 'short' });
            s.style.gridColumn = String(col + 1);
            months.appendChild(s);
            lastMonth = dt.getMonth(); lastCol = col;
          }
        });
        months.style.gridTemplateColumns = 'repeat(' + Math.ceil((pad + days.length) / 7) + ',minmax(0,1fr))';
        summary.innerHTML = '<strong>' + total.toLocaleString() + '</strong> contribution' + (total === 1 ? '' : 's') + ' in the last year';
        var sc = $('#contribScroll'); sc.scrollLeft = sc.scrollWidth;
      })
      .catch(function () {
        grid.innerHTML = ''; months.innerHTML = '';
        for (var k = 0; k < 53 * 7; k++) cell('cbox');
        summary.textContent = 'Live data didn\'t load. The full graph is on GitHub.';
      });
  })();
})();

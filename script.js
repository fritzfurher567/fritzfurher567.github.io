(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  var GH_USER = 'fritzfurher567';


  var EXPERIENCE = [
    {
      company: 'Freelance Developer', role: 'Roblox Scripter & Full-Stack Developer',
      from: '2026', to: 'Present', tag: 'Remote', icon: 'roblox', current: true,
      points: [
        'Custom Luau systems, UI and game mechanics for Roblox creators.',
        'Commissions from quick fixes up to multiplayer systems.'
      ],
      chips: ['Luau', 'UI Systems', 'Roblox Studio']
    },
    {
      company: 'Nexus', role: 'Founder & Lead Developer',
      from: '2026', tag: 'Discord Bot', icon: 'discord',
      points: [
        'All-in-one Discord bot with 300+ commands: moderation, tickets, leveling, economy and Roblox verification.',
        'Modular, cog-based Python codebase with a Next.js site alongside it.'
      ],
      chips: ['Python', 'discord.py', 'Next.js']
    },
    {
      company: 'Aberration', role: 'Lead Scripter',
      from: 'Jul 2026', tag: 'Roblox', icon: 'roblox',
      points: ['Lead scripter on a Roblox project.'],
      chips: ['Luau']
    },
    {
      company: 'Independent Projects', role: 'Lua/Luau, Web Scripting & Discord Bots',
      from: '2025', to: 'Present', tag: 'Remote', icon: 'folder',
      points: ['Self-directed Roblox, web and Discord bot projects.'],
      chips: []
    }
  ];

  
  var PROJECTS = [
    {
      slug: 'nexus', title: 'Nexus', cat: 'personal', category: 'Discord Bot',
      blurb: 'An all-in-one Discord bot with 300+ commands and features.',
      badges: ['PY', 'NEXT', 'TW'],
      timeline: '2026', status: 'Archived', statusKind: 'archived',
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
      tech: [
        { n: 'Python', c: '#3776ab' }, { n: 'discord.py', c: '#5865f2' },
        { n: 'Next.js', c: '#e5e5e5' }, { n: 'Convex', c: '#f3b01c' }, { n: 'Tailwind CSS', c: '#38bdf8' }
      ],
      live: null, source: 'https://github.com/fritzfurher567/Nexus-Bot'
    },
    {
      slug: 'apiary', title: 'Apiary', cat: 'personal', category: 'Web App',
      blurb: 'An API key vault and API marketplace in one dashboard.',
      badges: ['WEB'],
      timeline: '2026', status: 'IN DEVELOPMENT', statusKind: 'wip',
      overview: 'Apiary is an all-in-one API key vault and API marketplace: discover APIs, buy access, keep your keys in one place, organize them into projects and keep an eye on usage and billing.',
      features: [
        'Discover APIs and buy access from a marketplace.',
        'Store keys and organize them into projects.',
        'Usage and billing overview in a single dashboard.'
      ],
      journey: [], final: '', tech: [], live: null, source: null
    },
    {
      slug: 'targetly', title: 'Targetly', cat: 'personal', category: 'Web App, Job Search',
      blurb: 'A job searcher which searches jobs on Indeed and LinkedIn, Which also finds people on github and portfolios.',
      badges: ['WEB'],
      timeline: '2026', status: 'IN DEVELOPMENT', statusKind: 'wip',
      overview: 'Targetly is a web app that allows users to search for jobs on Indeed and LinkedIn, as well as find people on GitHub and portfolios. It provides a streamlined experience for job seekers and recruiters alike.',
      features: [
        'Discover APIs and buy access from a marketplace.',
        'Store keys and organize them into projects.',
        'Usage and billing overview in a single dashboard.'
      ],
      journey: [], final: '', tech: [ ], live: null, source: null
    },
        {
      slug: 'kuro-browser', title: 'Kuro Browser', cat: 'personal', category: 'Browser',
      blurb: 'A web browser with a focus on privacy and performance.',
      badges: ['WEB'],
      timeline: '2026', status: 'IN DEVELOPMENT', statusKind: 'wip',
      overview: 'Kuro Browser is a web browser with a focus on privacy and performance. It provides a streamlined experience for users who prioritize their online safety and browsing speed.',
      features: [
        'Privacy-focused browsing experience with built-in ad-blocking and tracking protection.',
        'Local Optional Side-Assistant AI using Ollama for enhanced browsing experience and privacy',
        'Built on Zen Browser and Firefox, with a focus on performance and speed.'
      ],
      journey: [
      ], final: '', tech: [
       { n: 'C++', c: '#904141' }, { n: 'JavaScript', c: '#F7DF1E' }, { n: 'HTML', c: '#E34C2A' }, { n: 'CSS', c: '#1572B6' }, { n: 'Python', c: '#3776AB' }, { n: 'Fluent', c: '#007ACC' }, { n: 'Ollama', c: '#FF6B6B' }, { n: 'Zen Browser', c: '#000000' }, { n: 'Firefox', c: '#FF9500' }
      ], live: null, source: null
    },
  ];


  var ICONS = {
    roblox: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.16 0L0 18.84l18.84 5.16L24 5.16L5.16 0zm10.74 13.89l-5.63-1.54l1.54-5.63l5.63 1.54l-1.54 5.63z"/></svg>',
    discord: '<svg viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.15c2.65-27.28-4.52-51.04-19.45-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5.18-12.72,11.45-12.72S53.9,46,53.88,53,48.71,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.18-12.72,11.44-12.72S96.15,46,96.13,53,90.95,65.69,84.69,65.69Z"/></svg>',
    folder: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h5l2 2.4h9V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    back: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.94c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.03.36.32.68.95.68 1.92v2.85c0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>',
    layers: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
    check: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.3 2.4 2.4 4.6-5"/></svg>',
    code: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    info: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>'
  };


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
    });
  });


  var PAGES = ['home', 'about', 'projects', 'testimonials', 'contact'];

  function goToPage(target, fromHash) {
    if (PAGES.indexOf(target) < 0) target = 'home';
    $$('.nav-item').forEach(function (n) {
      var on = n.getAttribute('data-page') === target;
      n.classList.toggle('active', on);
      if (on) n.setAttribute('aria-current', 'page'); else n.removeAttribute('aria-current');
    });
    $$('.page').forEach(function (p) { p.classList.remove('active'); });
    $('#page-' + target).classList.add('active');
    if (!fromHash) {
      try { history.replaceState(null, '', target === 'home' ? location.pathname + location.search : '#' + target); } catch (e) {}
    }
    window.scrollTo({ top: 0, behavior: reduceMotion || fromHash ? 'auto' : 'smooth' });
    runReveal();
  }
  $$('[data-page]').forEach(function (b) {
    b.addEventListener('click', function () { goToPage(b.getAttribute('data-page')); });
  });
  window.addEventListener('hashchange', function () { goToPage(location.hash.slice(1), true); });


  var io = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 })
    : null;
  function runReveal() {
    var active = $('.page.active');
    if (!active) return;
    $$('.reveal:not(.in)', active).forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }

  var bar = $('#scrollProgress');
  function onScroll() {
    var h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ')';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);


  document.addEventListener('pointermove', function (e) {
    var el = e.target.closest && e.target.closest('.spot');
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  function wrapRoll(scope) {
    $$('[data-roll]', scope).forEach(function (el) {
      var t = el.textContent;
      el.innerHTML = '<span class="roll"><span class="roll-inner"><span>' + t + '</span><span aria-hidden="true">' + t + '</span></span></span>';
      el.removeAttribute('data-roll');
    });
  }
  wrapRoll(document);

  var clockEl = $('#liveClock');
  var fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Toronto', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  function tick() { clockEl.textContent = fmt.format(new Date()); }
  tick(); setInterval(tick, 1000);
  $('#year').textContent = new Date().getFullYear();

  function describeWeather(c) {
    if (c === 0) return 'Clear';
    if (c <= 3) return 'Clouds';
    if (c === 45 || c === 48) return 'Fog';
    if (c >= 51 && c <= 57) return 'Drizzle';
    if (c >= 61 && c <= 67) return 'Rain';
    if (c >= 71 && c <= 77) return 'Snow';
    if (c >= 80 && c <= 82) return 'Showers';
    if (c >= 95) return 'Storm';
    return 'Clouds';
  }
  fetch('https://api.open-meteo.com/v1/forecast?latitude=43.6532&longitude=-79.3832&current_weather=true')
    .then(function (r) { return r.json(); })
    .then(function (d) {
      var w = d.current_weather; if (!w) return;
      $('#weatherTemp').textContent = Math.round(w.temperature) + '°C';
      $('#weatherDescText').textContent = describeWeather(w.weathercode);
      $('#weatherDesc').hidden = false;
    })
    .catch(function () { $('#weatherTemp').textContent = 'Ontario, ON'; });


  function countUp(el, to) {
    if (reduceMotion || to < 1) { el.textContent = to.toLocaleString(); return; }
    var t0 = null, dur = 1200;
    (function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }

  (function loadContrib() {
    var grid = $('#contribGrid'), months = $('#contribMonths'), countEl = $('#contribCount');
    fetch('https://github-contributions-api.jogruber.de/v4/' + GH_USER + '?y=last')
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (data) {
        var days = (data.contributions || []).slice(-365);
        if (!days.length) throw new Error('no data');
        var pad = new Date(days[0].date + 'T00:00:00').getDay();   
        var i, total = 0, lastMonth = -1, lastCol = -10;
        for (i = 0; i < pad; i++) { var p = document.createElement('div'); p.className = 'cbox pad'; grid.appendChild(p); }
        days.forEach(function (d, n) {
          var idx = pad + n, col = Math.floor(idx / 7);
          var box = document.createElement('div');
          box.className = 'cbox' + (d.level ? ' l' + d.level : '');
          var dt = new Date(d.date + 'T00:00:00');
          box.title = d.count + ' contribution' + (d.count === 1 ? '' : 's') + ' on ' + dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
          grid.appendChild(box);
          total += d.count;
          if (idx % 7 === 0 && dt.getMonth() !== lastMonth && col - lastCol >= 3) {
            var s = document.createElement('span');
            s.textContent = dt.toLocaleDateString('en-US', { month: 'short' });
            s.style.gridColumn = String(col + 1);
            months.appendChild(s);
            lastMonth = dt.getMonth(); lastCol = col;
          }
        });
        var sc = $('#contribScroll'); sc.scrollLeft = sc.scrollWidth;   
        if ('IntersectionObserver' in window) {
          var o = new IntersectionObserver(function (es) {
            if (es[0].isIntersecting) { o.disconnect(); countUp(countEl, total); }
          }, { threshold: 0.4 });
          o.observe(card);
        } else { countEl.textContent = total.toLocaleString(); }
      })
      .catch(function () {
     
        grid.innerHTML = '';
        for (var k = 0; k < 53 * 7; k++) { var c = document.createElement('div'); c.className = 'cbox'; grid.appendChild(c); }
        countEl.closest('.count').innerHTML = 'Couldn\'t load live contributions right now — <a href="https://github.com/' + GH_USER + '" target="_blank" rel="noopener" style="text-decoration:underline">view them on GitHub</a>.';
      });
  })();


  $('#expList').innerHTML = EXPERIENCE.map(function (x) {
    var date = x.from + (x.to ? ' — ' + (x.to === 'Present' ? '<span class="status">PRESENT</span>' : x.to) : '');
    var points = x.points && x.points.length ? '<ul class="exp-points">' + x.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' : '';
    var chips = x.chips && x.chips.length ? '<div class="chips">' + x.chips.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div>' : '';
    return '<article class="exp-item reveal' + (x.current ? ' current' : '') + '"><span class="exp-node"></span>' +
      '<div class="exp-card spot"><div class="exp-top"><div class="exp-icon">' + ICONS[x.icon] + '</div>' +
      '<div class="exp-titles"><h3>' + x.company + (x.current ? '<span class="live-dot"></span>' : '') + '</h3><div class="exp-role">' + x.role + '</div></div>' +
      '<div class="exp-meta"><div class="exp-date">' + date + '</div><div class="exp-tag">' + x.tag + '</div></div></div>' +
      points + chips + '</div></article>';
  }).join('');


  var filter = 'all';
  var rowsEl = $('#projectRows'), emptyEl = $('#projEmpty');
  var listEl = $('#projectsList'), detailEl = $('#projectsDetail');

  function renderRows() {
    var list = PROJECTS.filter(function (p) { return filter === 'all' || p.cat === filter; });
    rowsEl.innerHTML = list.map(function (p, i) {
      return '<article class="proj-row" tabindex="0" role="button" data-slug="' + p.slug + '" aria-label="Open ' + p.title + '">' +
        '<div class="proj-num">' + String(i + 1).padStart(2, '0') + '</div>' +
        '<div class="proj-mid"><h3>' + p.title + '</h3><p>' + p.blurb + '</p></div>' +
        '<div class="proj-badges">' + p.badges.map(function (b) { return '<div class="si">' + b + '</div>'; }).join('') + '</div>' +
        '<div class="proj-arrow">' + ICONS.arrow + '</div>' +
        '<div class="proj-preview"><div class="chrome"><span></span><span></span><span></span></div>' +
        '<img src="assets/projects/' + p.slug + '.png" alt="" loading="lazy" onerror="this.parentNode.remove()"></div>' +
        '</article>';
    }).join('');
    emptyEl.hidden = list.length > 0;
  }

  function story(title, icon, inner) {
    return '<div class="story"><div class="story-title"><span class="story-ico">' + ICONS[icon] + '</span>' + title + '</div>' + inner + '</div>';
  }

  function detailHTML(p) {
    var links = '';
    if (p.live) links += '<a class="live" href="' + p.live + '" target="_blank" rel="noopener">' + ICONS.arrow + 'Live Site</a>';
    if (p.source) links += '<a class="src" href="' + p.source + '" target="_blank" rel="noopener">' + ICONS.github + 'Source Code</a>';
    var main = story('Overview', 'layers', '<p>' + p.overview + '</p>');
    if (p.features && p.features.length) main += story('Key Features', 'check', '<div class="feature-box"><ul class="feature-list">' + p.features.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul></div>');
    if (p.journey && p.journey.length) main += story('Development Journey', 'code', '<ul class="journey-list">' + p.journey.map(function (j) { return '<li>' + j + '</li>'; }).join('') + '</ul>');
    if (p.final) main += '<div class="final-box"><strong>Final Thoughts</strong><em>' + p.final + '</em></div>';
    var tech = p.tech && p.tech.length
      ? '<div class="tech-box"><div class="label">Technologies Used</div><div class="tech-icons">' + p.tech.map(function (t) { return '<span class="tech-tag"><i style="background:' + t.c + '"></i>' + t.n + '</span>'; }).join('') + '</div></div>' : '';
    return '<div class="proj-detail">' +
      '<button class="back-link" type="button">' + ICONS.back + 'Back to Projects</button>' +
      '<div class="detail-head"><div><h2>' + p.title + '</h2><p>' + p.blurb + '</p></div>' + (links ? '<div class="detail-actions">' + links + '</div>' : '') + '</div>' +
      '<div class="proj-frame"><div class="chrome"><span></span><span></span><span></span></div>' +
      '<img src="assets/projects/' + p.slug + '.png" alt="' + p.title + ' preview" onerror="this.closest(\'.proj-frame\').remove()"></div>' +
      '<div class="project-story"><div class="project-main">' + main + '</div>' +
      '<aside class="project-side spot"><div class="side-header">' + ICONS.info + 'Project Details</div><div class="detail-grid">' +
      '<div class="detail-row"><span>Category</span><strong>' + p.category + '</strong></div>' +
      '<div class="detail-row"><span>Timeline</span><strong>' + p.timeline + '</strong></div>' +
      '<div class="detail-row"><span>Status</span><strong class="status-pill ' + p.statusKind + '">' + p.status + '</strong></div></div>' + tech + '</aside></div></div>';
  }

  function openProject(slug) {
    var p = PROJECTS.filter(function (x) { return x.slug === slug; })[0];
    if (!p) return;
    detailEl.innerHTML = detailHTML(p);
    listEl.hidden = true; detailEl.hidden = false;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  function closeProject() {
    detailEl.hidden = true; listEl.hidden = false;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  rowsEl.addEventListener('click', function (e) {
    var row = e.target.closest('.proj-row'); if (row) openProject(row.getAttribute('data-slug'));
  });
  rowsEl.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var row = e.target.closest('.proj-row'); if (!row) return;
    e.preventDefault(); openProject(row.getAttribute('data-slug'));
  });
  detailEl.addEventListener('click', function (e) { if (e.target.closest('.back-link')) closeProject(); });

  $$('.filter-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      filter = b.getAttribute('data-filter');
      $$('.filter-btn').forEach(function (x) {
        var on = x === b; x.classList.toggle('active', on); x.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      renderRows();
    });
  });
  renderRows();

    if (location.hash.length > 1) goToPage(location.hash.slice(1), true);
  runReveal();
  onScroll();
})();

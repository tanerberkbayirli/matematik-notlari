(function () {
  const TOPICS = window.MATH_TOPICS || [];
  const LESSONS = window.MATH_LESSONS || {};
  const QUESTIONS = window.MATH_QUESTIONS || [];
  const THEME_KEY = 'math_notes_theme_v1';

  const state = {
    activeTopicId: TOPICS[0]?.id || 'taban-aritmetigi',
    activeTab: 'questions', // 'questions' | 'lesson'
    searchQuery: '',
    openAnswers: new Set(),
    openSteps: new Set(),
    renderedTopicId: null
  };

  const topicNav = document.getElementById('topicNav');
  const mainContent = document.getElementById('mainContent');
  const searchInput = document.getElementById('searchInput');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const scrollProgress = document.getElementById('scrollProgress');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const menuToggle = document.getElementById('menuToggle');

  const imageModal = document.getElementById('imageModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');

  let navIndicator = null;
  let modalCloseTimer = null;

  // Tema
  if (localStorage.getItem(THEME_KEY) === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, 'light');
      themeIcon.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem(THEME_KEY, 'dark');
      themeIcon.textContent = '☀️';
    }
    themeToggle.classList.remove('is-spinning');
    void themeToggle.offsetWidth;
    themeToggle.classList.add('is-spinning');
  });

  // Tıklama Dalga (Ripple) Efekti
  function spawnRipple(target, clientX, clientY) {
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = clientX ? clientX - rect.left : rect.width / 2;
    const y = clientY ? clientY - rect.top : rect.height / 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    target.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  }

  document.addEventListener('pointerdown', (e) => {
    const target = e.target.closest('.nav-item, .tab, .btn, .icon-btn');
    if (target) spawnRipple(target, e.clientX, e.clientY);
  });

  function updateScrollProgress() {
    if (!scrollProgress) return;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
    scrollProgress.style.width = `${pct}%`;
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', () => {
    updateScrollProgress();
    moveNavIndicator(false);
    moveTabIndicator(false);
  }, { passive: true });

  // Mobil menü
  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.add('hidden');
  }

  menuToggle.addEventListener('click', () => {
    const open = !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', open);
    sidebarBackdrop.classList.toggle('hidden', !open);
    if (open) requestAnimationFrame(() => moveNavIndicator(false));
  });

  sidebarBackdrop.addEventListener('click', closeSidebar);

  // KaTeX
  function renderMath(el) {
    if (!el || typeof window.renderMathInElement !== 'function') return;
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    } catch (_) {}
  }

  window.addEventListener('load', () => {
    renderMath(mainContent);
    moveNavIndicator(false);
    moveTabIndicator(false);
  });

  // Modal (Animasyonlu açılış & kapanış)
  function openModal(src, title) {
    if (modalCloseTimer) {
      clearTimeout(modalCloseTimer);
      modalCloseTimer = null;
    }
    imageModal.classList.remove('is-closing');
    modalImg.src = encodeURI(src);
    modalTitle.textContent = title || 'Defter Sayfası';
    imageModal.classList.remove('hidden');
  }

  function closeModal() {
    if (imageModal.classList.contains('hidden') || imageModal.classList.contains('is-closing')) return;
    imageModal.classList.add('is-closing');
    modalCloseTimer = setTimeout(() => {
      imageModal.classList.add('hidden');
      imageModal.classList.remove('is-closing');
      modalImg.src = '';
      modalCloseTimer = null;
    }, 180);
  }

  modalBackdrop.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) closeModal();
  });

  function getTopicQuestions(topicId) {
    return QUESTIONS.filter((q) => q.topicId === topicId);
  }

  // Sol Menü (Kayan Pill Göstergeli)
  function moveNavIndicator(animate = true) {
    if (!navIndicator) return;
    const activeBtn = topicNav.querySelector('.nav-item.active');
    if (!activeBtn) {
      navIndicator.style.opacity = '0';
      return;
    }
    if (!animate) navIndicator.style.transition = 'none';
    navIndicator.classList.toggle('is-after', activeBtn.classList.contains('phase-after'));
    navIndicator.style.height = `${activeBtn.offsetHeight}px`;
    navIndicator.style.transform = `translateY(${activeBtn.offsetTop}px)`;
    navIndicator.style.opacity = '1';
    if (!animate) {
      void navIndicator.offsetHeight;
      navIndicator.style.transition = '';
    }
  }

  function updateSidebarActive() {
    const isSearching = Boolean(state.searchQuery.trim());
    topicNav.querySelectorAll('.nav-item').forEach((btn) => {
      const active = !isSearching && btn.dataset.topic === state.activeTopicId;
      btn.classList.toggle('active', active);
    });
    moveNavIndicator(true);
  }

  function initSidebar() {
    const before = TOPICS.filter((t) => t.phase === 'before');
    const after = TOPICS.filter((t) => t.phase === 'after');

    const itemHtml = (t) => {
      const count = getTopicQuestions(t.id).length;
      const active = !state.searchQuery.trim() && state.activeTopicId === t.id;
      return `
        <button class="nav-item phase-${t.phase} ${active ? 'active' : ''}" data-topic="${t.id}">
          <span class="nav-left">
            <span class="nav-num">${t.icon}</span>
            <span class="nav-label">${t.title}</span>
          </span>
          <span class="nav-count">${count}</span>
        </button>
      `;
    };

    topicNav.innerHTML = `
      <div class="nav-indicator" aria-hidden="true"></div>
      <div class="nav-group">Vize Öncesi</div>
      ${before.map(itemHtml).join('')}
      <div class="nav-group">Vize Sonrası</div>
      ${after.map(itemHtml).join('')}
    `;

    navIndicator = topicNav.querySelector('.nav-indicator');

    topicNav.querySelectorAll('.nav-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextTopic = btn.dataset.topic;
        const wasSearching = Boolean(state.searchQuery.trim());
        searchInput.value = '';
        state.searchQuery = '';
        if (state.activeTopicId === nextTopic && !wasSearching) {
          closeSidebar();
          return;
        }
        state.activeTopicId = nextTopic;
        closeSidebar();
        updateSidebarActive();
        renderMain();
        if (window.scrollY > 120) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    requestAnimationFrame(() => moveNavIndicator(false));
  }

  // Sekme Kayan Pill Göstergesi
  function moveTabIndicator(animate = true) {
    const tabsEl = mainContent.querySelector('.tabs');
    if (!tabsEl) return;
    const indicator = tabsEl.querySelector('.tab-indicator');
    const activeTab = tabsEl.querySelector('.tab.active');
    if (!indicator || !activeTab) return;
    if (!animate) indicator.style.transition = 'none';
    indicator.style.width = `${activeTab.offsetWidth}px`;
    indicator.style.transform = `translateX(${activeTab.offsetLeft}px)`;
    if (!animate) {
      void indicator.offsetWidth;
      indicator.style.transition = '';
    }
  }

  // Soru Kartı
  function renderQuestionCard(q, indexLabel, cardIndex = 0, isStatic = false) {
    const showAns = state.openAnswers.has(q.id);
    const showSteps = state.openSteps.has(q.id);
    const hasOpen = showAns || showSteps;

    return `
      <article class="q-card ${hasOpen ? 'has-open' : ''} ${isStatic ? 'is-static' : ''}" data-qid="${q.id}" data-label="${indexLabel.replace(/"/g, '&quot;')}" style="--i: ${cardIndex}">
        <div class="q-meta">${indexLabel}</div>
        <div class="q-prompt">${q.prompt}</div>

        <div class="q-btn-row">
          <button class="btn ${showAns ? 'is-open' : ''}" data-ans="${q.id}">
            ${showAns ? 'Cevabı Gizle' : 'Cevabı Göster'}
          </button>
          <button class="btn ${showSteps ? 'is-open' : ''}" data-steps="${q.id}">
            ${showSteps ? 'Adımları Gizle' : 'Adım Adım Anlat'}
          </button>
        </div>

        ${showAns ? `
          <div class="answer-box">
            <strong>Cevap:</strong> ${q.answer}
          </div>
        ` : ''}

        ${(showAns || showSteps) && q.note ? `
          <div class="note-box"><strong>Not:</strong> ${q.note}</div>
        ` : ''}

        ${showSteps ? `
          <div class="steps-list">
            ${q.steps.map((s, i) => `
              <div class="step-item" style="--s: ${i}">
                <span class="step-badge">${i + 1}</span>
                <div class="step-content">
                  <strong>${s.title}</strong>
                  <p>${s.detail}</p>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </article>
    `;
  }

  function buildTopicBodyHtml(topic, qs, lesson) {
    if (state.activeTab === 'questions') {
      const groups = [];
      const map = new Map();
      qs.forEach((q) => {
        if (!map.has(q.section)) {
          const arr = [];
          map.set(q.section, arr);
          groups.push({ section: q.section, items: arr });
        }
        map.get(q.section).push(q);
      });

      let counter = 1;
      let cardIdx = 0;
      return groups.map((g) => `
        <div class="section-title">${g.section}</div>
        <div class="q-list">
          ${g.items.map((q) => renderQuestionCard(q, `Soru ${counter++}`, cardIdx++)).join('')}
        </div>
      `).join('');
    }

    return `
      <div class="callout-tip">${lesson.summary}</div>
      ${lesson.sections.map((sec, idx) => `
        <section class="lesson-block" style="--i: ${idx}">
          <h3>${sec.title}</h3>
          <div>${sec.body}</div>
        </section>
      `).join('')}
      <section class="lesson-block" style="--i: ${lesson.sections.length}">
        <h3>Defter Fotoğrafları</h3>
        <div class="source-links">
          ${topic.sourceImages.map((src, i) => `
            <button class="btn open-img" data-src="${src}" data-title="${topic.title} — Sayfa ${i + 1}">
              Sayfa ${i + 1}
            </button>
          `).join('')}
        </div>
      </section>
    `;
  }

  function bindBodyInteractions(container) {
    container.querySelectorAll('.open-img').forEach((btn) => {
      btn.addEventListener('click', () => openModal(btn.dataset.src, btn.dataset.title));
    });
    attachQuestionEvents(container);
    renderMath(container);
    updateScrollProgress();
  }

  function switchTabSmooth(nextTab) {
    if (state.activeTab === nextTab) return;
    const prevTab = state.activeTab;
    state.activeTab = nextTab;

    const tabsEl = mainContent.querySelector('.tabs');
    const bodyEl = mainContent.querySelector('.tab-body');
    if (!tabsEl || !bodyEl) {
      renderMain();
      return;
    }

    tabsEl.querySelectorAll('.tab').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.tab === nextTab);
    });
    moveTabIndicator(true);

    const topic = TOPICS.find((t) => t.id === state.activeTopicId) || TOPICS[0];
    const qs = getTopicQuestions(topic.id);
    const lesson = LESSONS[topic.id];

    const animClass = prevTab === 'questions' && nextTab === 'lesson' ? 'slide-from-right' : 'slide-from-left';
    bodyEl.classList.remove('slide-from-right', 'slide-from-left', 'topic-enter');
    bodyEl.innerHTML = buildTopicBodyHtml(topic, qs, lesson);
    void bodyEl.offsetWidth;
    bodyEl.classList.add(animClass);

    bindBodyInteractions(bodyEl);
  }

  // Ana İçerik
  function renderMain() {
    const query = state.searchQuery.trim().toLowerCase();
    if (query) {
      state.renderedTopicId = null;
      const matches = QUESTIONS.filter((q) => {
        const topic = TOPICS.find((t) => t.id === q.topicId);
        const hay = [q.section, q.prompt, q.answer, topic?.title || '', ...q.steps.map((s) => `${s.title} ${s.detail}`)].join(' ').toLowerCase();
        return hay.includes(query);
      });

      mainContent.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Arama Sonuçları</div>
          <h1>${matches.length} soru bulundu</h1>
        </div>
        <div class="q-list">
          ${matches.length
            ? matches.map((q, i) => {
                const topic = TOPICS.find((t) => t.id === q.topicId);
                return renderQuestionCard(q, `${i + 1} · ${topic?.title || ''} · ${q.section}`, i);
              }).join('')
            : '<div class="lesson-block">Eşleşen soru bulunamadı.</div>'
          }
        </div>
      `;
      attachQuestionEvents(mainContent);
      renderMath(mainContent);
      updateScrollProgress();
      return;
    }

    const topic = TOPICS.find((t) => t.id === state.activeTopicId) || TOPICS[0];
    const qs = getTopicQuestions(topic.id);
    const lesson = LESSONS[topic.id];
    state.renderedTopicId = topic.id;

    mainContent.innerHTML = `
      <div class="page-head ${topic.phase === 'after' ? 'is-after' : ''}">
        <div class="page-kicker">${topic.phaseLabel}</div>
        <h1>${topic.title}</h1>
        <p>${topic.subtitle}</p>
      </div>
      <div class="tabs">
        <div class="tab-indicator" aria-hidden="true"></div>
        <button class="tab ${state.activeTab === 'questions' ? 'active' : ''}" data-tab="questions">
          Sorular (${qs.length})
        </button>
        <button class="tab ${state.activeTab === 'lesson' ? 'active' : ''}" data-tab="lesson">
          Konu Anlatımı
        </button>
      </div>
      <div class="tab-body topic-enter">
        ${buildTopicBodyHtml(topic, qs, lesson)}
      </div>
    `;

    mainContent.querySelectorAll('.tab').forEach((btn) => {
      btn.addEventListener('click', () => switchTabSmooth(btn.dataset.tab));
    });

    requestAnimationFrame(() => moveTabIndicator(false));
    bindBodyInteractions(mainContent);
  }

  function updateSingleQuestionCard(cardEl, qId) {
    const q = QUESTIONS.find((item) => item.id === qId);
    if (!cardEl || !q) return;
    const label = cardEl.dataset.label || '';
    const wrapper = document.createElement('div');
    wrapper.innerHTML = renderQuestionCard(q, label, 0, true).trim();
    const newCard = wrapper.firstElementChild;
    cardEl.replaceWith(newCard);
    attachQuestionEvents(newCard);
    renderMath(newCard);
    updateScrollProgress();
  }

  function attachQuestionEvents(scope = mainContent) {
    scope.querySelectorAll('[data-ans]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.ans;
        if (state.openAnswers.has(id)) state.openAnswers.delete(id);
        else state.openAnswers.add(id);
        updateSingleQuestionCard(btn.closest('.q-card'), id);
      });
    });

    scope.querySelectorAll('[data-steps]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.steps;
        if (state.openSteps.has(id)) state.openSteps.delete(id);
        else state.openSteps.add(id);
        updateSingleQuestionCard(btn.closest('.q-card'), id);
      });
    });
  }

  searchInput.addEventListener('input', () => {
    state.searchQuery = searchInput.value;
    updateSidebarActive();
    renderMain();
  });

  initSidebar();
  renderMain();
})();

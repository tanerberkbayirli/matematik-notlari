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
    openSteps: new Set()
  };

  const topicNav = document.getElementById('topicNav');
  const mainContent = document.getElementById('mainContent');
  const searchInput = document.getElementById('searchInput');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const menuToggle = document.getElementById('menuToggle');

  const imageModal = document.getElementById('imageModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');

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
  });

  // Mobil menü
  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.add('hidden');
  }

  menuToggle.addEventListener('click', () => {
    const open = !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', open);
    sidebarBackdrop.classList.toggle('hidden', !open);
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

  window.addEventListener('load', () => renderMath(mainContent));

  // Modal
  function openModal(src, title) {
    modalImg.src = encodeURI(src);
    modalTitle.textContent = title || 'Defter Sayfası';
    imageModal.classList.remove('hidden');
  }

  function closeModal() {
    imageModal.classList.add('hidden');
    modalImg.src = '';
  }

  modalBackdrop.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) closeModal();
  });

  function getTopicQuestions(topicId) {
    return QUESTIONS.filter((q) => q.topicId === topicId);
  }

  // Sol Menü
  function renderSidebar() {
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
      <div class="nav-group">Sınav Öncesi</div>
      ${before.map(itemHtml).join('')}
      <div class="nav-group">Sınav Sonrası</div>
      ${after.map(itemHtml).join('')}
    `;

    topicNav.querySelectorAll('.nav-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        state.activeTopicId = btn.dataset.topic;
        closeSidebar();
        renderAll();
      });
    });
  }

  // Soru Kartı
  function renderQuestionCard(q, indexLabel) {
    const showAns = state.openAnswers.has(q.id);
    const showSteps = state.openSteps.has(q.id);

    return `
      <article class="q-card">
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
              <div class="step-item">
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

  // Ana İçerik
  function renderMain() {
    const query = state.searchQuery.trim().toLowerCase();
    if (query) {
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
                return renderQuestionCard(q, `${i + 1} · ${topic?.title || ''} · ${q.section}`);
              }).join('')
            : '<div class="lesson-block">Eşleşen soru bulunamadı.</div>'
          }
        </div>
      `;
      attachQuestionEvents();
      renderMath(mainContent);
      return;
    }

    const topic = TOPICS.find((t) => t.id === state.activeTopicId) || TOPICS[0];
    const qs = getTopicQuestions(topic.id);
    const lesson = LESSONS[topic.id];

    const headHtml = `
      <div class="page-head ${topic.phase === 'after' ? 'is-after' : ''}">
        <div class="page-kicker">${topic.phaseLabel}</div>
        <h1>${topic.title}</h1>
        <p>${topic.subtitle}</p>
      </div>
      <div class="tabs">
        <button class="tab ${state.activeTab === 'questions' ? 'active' : ''}" data-tab="questions">
          Sorular (${qs.length})
        </button>
        <button class="tab ${state.activeTab === 'lesson' ? 'active' : ''}" data-tab="lesson">
          Konu Anlatımı
        </button>
      </div>
    `;

    let bodyHtml = '';
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
      bodyHtml = groups.map((g) => `
        <div class="section-title">${g.section}</div>
        <div class="q-list">
          ${g.items.map((q) => renderQuestionCard(q, `Soru ${counter++}`)).join('')}
        </div>
      `).join('');
    } else {
      bodyHtml = `
        <div class="callout-tip">${lesson.summary}</div>
        ${lesson.sections.map((sec) => `
          <section class="lesson-block">
            <h3>${sec.title}</h3>
            <div>${sec.body}</div>
          </section>
        `).join('')}
        <section class="lesson-block">
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

    mainContent.innerHTML = headHtml + bodyHtml;

    mainContent.querySelectorAll('.tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeTab = btn.dataset.tab;
        renderMain();
      });
    });

    mainContent.querySelectorAll('.open-img').forEach((btn) => {
      btn.addEventListener('click', () => openModal(btn.dataset.src, btn.dataset.title));
    });

    attachQuestionEvents();
    renderMath(mainContent);
  }

  function attachQuestionEvents() {
    mainContent.querySelectorAll('[data-ans]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.ans;
        if (state.openAnswers.has(id)) state.openAnswers.delete(id);
        else state.openAnswers.add(id);
        renderMain();
      });
    });

    mainContent.querySelectorAll('[data-steps]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.steps;
        if (state.openSteps.has(id)) state.openSteps.delete(id);
        else state.openSteps.add(id);
        renderMain();
      });
    });
  }

  function renderAll() {
    renderSidebar();
    renderMain();
  }

  searchInput.addEventListener('input', () => {
    state.searchQuery = searchInput.value;
    renderAll();
  });

  renderAll();
})();
